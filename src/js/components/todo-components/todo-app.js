import React from 'react';
import TodoFooter from './todo-footer';
import TodoHeader from './todo-header';
import MainSection from './todo-mainsection';
import AppStore from '../../stores/app-store';

const getTodoState () {
	return {
		allTodos: AppStore.getAll(),
		areAllComplete: AppStore.areAllComplete()
	};
}

export default class TodoApp extends React.Component  {
	constructor(props) {
    super(props)


    /*Tutaj może będzie trzeba poprawić te this.state.....*/
    this.state = {
     appTodos : getTodoState().allTodos,
     areAllComplete= getTodoState().areAllComplete
    }

  }
  /*componentDidMount: function() {
    TodoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    TodoStore.removeChangeListener(this._onChange);
  },*/

  _onChange(){
  	this.setState(getTodoState());
  }
  render (){
  	return (
  			<div>
  				<Header />
  				<MainSection
  				allTodos={this.state.appTodos}
  				areAllComplete={this.state.areAllComplete}
  				/>
  				<Footer allTodos={this.state.allTodos} />
  			</div>
  		);
  }
}