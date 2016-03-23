import React from 'react';
import AppActions from '../../actions/app-actions';
import TodoTextInput from './todo-textinput';
import classNames from 'classnames';

/*Co z tymi propTypes trzeba sie dowiedziec ale to pozniej*/

/*var ReactPropTypes = React.PropTypes;*/

/*propTypes: {
   todo: ReactPropTypes.object.isRequired
  },*/



  //Czy te funkcje są w porządku, czy this.props jest dobrze użyte etc. etc.

export default class TodoItem extends React.Component  {
	constructor(props) {
	    super(props)

		    this.state = {
		   	isEditing : false
	    };

	    this._onToggleComplete = this._onToggleComplete.bind(this);
	    this._onDoubleClick =this._onDoubleClick.bind(this);
	    this._onDestroyClick = this._onDestroyClick.bind(this);
	    this._onSave = this._onSave.bind(this);
	}
	_onToggleComplete() {
		AppActions.toggleComplete(this.props.todo);
	},
	_onDoubleClick() {
		this.setState({ isEditing: true });
	},
	_onSave( text ) {
		AppActions.updateText(this.props.todo.id, text);
		this.setState({isEditing: false });
	}
	_onDestroyClick(){
		AppActions.destroy(this.props.todo.id);
	}
	render() {
		return (
			<li
			className={classNames({
				'completed': todo.complete,
				'editing': this.state.isEditing
			})}
			key={todo.id}>
				<div className="view"?
					<input
						className="toggle"
						type="checkbox"
						checked={todo.complete}
						onChange={this.state._onToggleComplete}
						/>
						<label onDoubleClick={this.state._onDoubleClick}>
							{todo.text}
						</label>
						<button className="destroy" onClick={this.state._onDestroyClick} />
				</div>
				{input}
			</li>

		);
	}
}