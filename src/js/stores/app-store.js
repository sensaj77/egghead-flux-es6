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

 var removeItem = function( item ) {

    console.log("remove");
/*    console.log(EventEmitter);
    console.log({EventEmitter});
    console.log(dispatch);
    console.log(register);*/
   /* var actualData = myData;*/

     /* if(item.selectedIndex !== -1) {
        
        actualData.splice(item.selectedIndex, 1);
      } else {

        console.log("something works after else");
        
      }*/
    
/*    this.setState({
      myData : actualData
    })*/

  }

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
	logActualOptions() {
		console.log(logData);
	},

	/*action as a register parameter can be also called payload it 
	is payload send to dispatcher when action happens*/
	dispatcherIndex:register ( function ( action ) {
		switch (action.actionType) {
			

				case AppConstants.REMOVE_ITEM:
				removeItem ( action.item );
				break;

		}

		AppStore.emitChange ();
	})
});

export default AppStore;