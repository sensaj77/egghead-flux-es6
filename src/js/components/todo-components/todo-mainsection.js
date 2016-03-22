import React from 'react';
import AppActions from '../../actions/app-actions';
import TodoItem from './todo-item';

export default class MainSection extends React.Component  {
	constructor(props) {
    super(props)

    this.state = {
   	allTodos: allTodos
    }
    this._onToggleCompleteAll = this._onToggleCompleteAll.bind(this)
  }
  _onToggleCompleteAll() {
  	AppActions.toggleCompleteAll();
  }
  // Kolejne miejsce gdzie allTodos jest używane a nie jest 
  // zadeklarowane/zdefiniowane
  render() {
  	if (Object.keys(this.state.allTodos).length < 1){
  		return null;  	}
  }
  var allTodos = this.state.allTodos;
  var myTodos = [];

  for (var key in allTodos) {
  	myTodos.push(<TodoItem key={key} todo={allTodos[key]} />);

  }
  return (
  	<section id="main">
  		<input
  		id="toggle-all"
  		type="checkbox"
  		onChange={this._onToggleCompleteAll}
  		checked={this.props.areAllComplete ? 'checked' : ''}
  		/>
  		<label htmlFor="toggle-all"> Mark all as complete</label>
  		<ul id="todo-list">{myTodos}</ul>

  	</section>
  	);
}