import React from 'react';
import AppActions from '../../actions/app-actions';


export default class TodoFooter extends React.Component  {
	constructor(props) {
    super(props)

    this.state = {
     allTodos : this.props.allTodos
    }

  }
  	_onClearCompletedClick () {
  		AppActions.destroyCompleted();
  	}
	render() {
		var allTodosJSX = this.state.allTodos;
		var totalTodoItems = Object.keys(allTodos).length;

		if (totalTodoItems === 0) {
			return null;
		}
		var completed = 0;
		for (var key in allTodosJSX) {
			if(allTodosJSX[key].complete) {
				completed= completed + 1;
			}
		}

		var itemsLeft = totalTodoItems - completed;
		var itemsLeftPhrase = itemsLeft === 1 ? ' item ' : ' items ';
		itemsLeftPhrase += 'left';

		/*Undefined and thus not rendered if no completed items are left*/

		var clearCompletedButton;

		if (completed) {
			clearCompletedButton = 
			<button
			id="clear-completed"
			onClick={this._onClearCompletedClick}>
			Clear completed ({completed})
			</button>;
		} 

		return (
			<footer id="footer">
				<span id="todo-count">
					<strong>
						{itemsLeft}
					</strong>
					{itemsLeftPhrase}
				</span>
				{clearCompletedButton}
			</footer>
			);
	}
}