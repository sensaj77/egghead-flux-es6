import React from 'react';

export default class SelectInput extends React.Component  {
	constructor(props) {
    super(props)

    this.state = {
     /* products: this.props.products,
      currentProducts: this.props.products*/
      inputValue: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange (event) {

    this.setState({
    	inputValue: event.target.value,
    	
    })
    console.log(this.state.inputValue);
  }
  handleSubmit (event) {
  	event.preventDefault();
  	console.log(this.state.inputValue)
  }
	render() {
		return (
			<div>
 				
				<h1>Some playground instead of log out for now</h1>
				<form onSubmit={this.handleSubmit}>
				 <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
			     <input type="submit" />
			    </form>
		    </div>


			);
	}
}