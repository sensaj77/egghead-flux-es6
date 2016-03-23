import React from 'react';
import { dispatch, register } from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';

/*EVENT EMITTER IMPORTED FROM NODE (events)*/
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';


var logData = [
      { planned: "Wino z Karoliną" },
      { planned: "Spacer z Karoliną" },
      { planned: "Frytki z Karoliną" }
    ];
var newLogData = [];

var _todos = {};

/*Create todo item*/

const createTodo = ( text ) => {
	var todoId = Date.now();
	_todos[id] = {
		id: id,
		complete: false,
		text: text
	};
}
/*Delete TODO item*/

const destroyTodo = ( id ) => {
	delete _todos[id];
}


const removeItem = ( item ) => {

    console.log("remove");
    console.log(item);


  };
  /*React.findDOMNode(this.refs.itemName)*/

  const addItem =  ( item ) => {
  	console.log("adding item ");

	};
  
const AppStore = Object.assign(EventEmitter.prototype, { 

	emitChange(){

		/*console.log("fifth at AppStore const console.log " + _cartItems );*/

		this.emit( CHANGE_EVENT )
	},
	addChangeListener( callback ) {
		this.on ( CHANGE_EVENT, callback )
	},
	removeChangeListener( callback ) {
		this.removeListener ( CHANGE_EVENT, callback )
	},
	getDefaultOptions() {
		return logData;
	},
	getAllTodoItems () {
		return _todos;
	},

	areAllComplete() {
		for (var id in _todos){
			if(!_todos[id].complete) {
				return false;
			}
		}
		return true;
	},
	
	/*action as a register parameter can be also called payload it 
	is payload send to dispatcher when action happens*/
	dispatcherIndex:register ( function ( action ) {
		switch (action.actionType) {
				case AppConstants.TODO_CREATE:
				text = action.text.trim();
				if(text !== '') {
					create(text);
				}
				break;
				case AppConstants.TODO_DESTROY:
				destroy(action.id);
				break;
			

				case AppConstants.REMOVE_ITEM:
				removeItem ( action.item );
				break;
				case AppConstants.ADD_ITEM:
				addItem ( action.item );
				break;

		}

		AppStore.emitChange ();
	})
});

export default AppStore;