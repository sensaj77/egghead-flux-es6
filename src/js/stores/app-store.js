import React from 'react';
import { dispatch, register } from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';

/*EVENT EMITTER IMPORTED FROM NODE (events)*/
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

var relationshipTasks = [
	 {
    id: 1,
    complete: false,
    text: "Wino z Karoliną"
  },
   {
    id: 2,
    complete: false,
    text: "Kino z Karoliną"
  },
   {
    id: 3,
    complete: false,
    text: "Spacer z Karoliną"
  },
  {
    id: 4,
    complete: false,
    text: "Frytki z Karoliną"
  },
  {
    id: 5,
    complete: false,
    text: "Bieganie z Karoliną"
  },
  {
    id: 6,
    complete: false,
    text: "Film z Karoliną"
  }
];

var _selectedTasks = [];

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
  	_selectedTasks.push( item );
  	console.log(_selectedTasks);

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
	defaultRelationshipTasks() {
		return relationshipTasks;
	},
	selectedTasks() {
		return _selectedTasks;
	},
	/*action as a register parameter can be also called payload it 
	is payload send to dispatcher when action happens*/
	dispatcherIndex:register ( function ( action ) {
		switch (action.actionType) {
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