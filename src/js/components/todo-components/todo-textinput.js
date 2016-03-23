import React from 'react';

/*var ReactPropTypes = React.PropTypes;*/

var ENTER_KEY_CODE = 13;

export default class TodoTextInput extends React.Component  {
	constructor(props) {
	    super(props)

		    this.state = {
		   	value: this.props.value || ''
	    };

	}
	_save(){
		this.props.onSave(this.state.value);
		this.setState({
			value:''
		});
	},
	_onChange(  event){
		this.setState({
			value: event.target.value
		});
	},
	_onKeyDown () {
		if ( event.keyCode === ENTER_KEY_CODE) {
			this._save();
		}
	}
	render(){
		//Tutaj bedzie trzeba posprawdzac takze, czy this.state czy this.props czy same this.func 
		// bedzie dzialac , ale najwazniejsze -  z tego tutoriala wynika ze: NIE CALA PRACA JEST W STORACH
		//Niektore funkcje sa w componentach - TUTAJ  np. -----> 3 FUNkCJE ( czy tam metody)
		return (
				<input 
					className={this.props.className}
					id={this.props.id}
					placeholder={this.props.placeholder}
					onBlur={this._save}
					onChange={this.state._onChange}
					onKeyDown={this.state._onKeyDown}
					value={this.state.value}
					autoFocus={true}
				/>
			);
	}
}