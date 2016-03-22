import React from 'react';
import AppActions from '../../actions/app-actions';
import TodoTextInput from './todo-textinput';

export default class TodoHeader extends React.Component  {
	constructor(props) {
    super(props)

    this.state = {
   
    }
    this._onSave = this._onSave.bind(this)
  }
  _onSave( text ) {
  	if (text.trim()) {
  		AppActions.create(text);
  	}
  }
  render() {
  	return (
  			<header id="header">
  			<h1>Todos</h1>
  			<TodoTextInput id="new-todo" placeholder="add something" onSave={this._onSave} />
  			</header>
  		)
  }
}