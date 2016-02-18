import { dispatch, register } from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';

/*EVENT EMITTER IMPORTED FROM NODE (events)*/
import { EventEmitter } from 'events';



/*value = change will be broadcasted every time smth changes in our app
*/
const CHANGE_EVENT = 'change';

var _catalog = [];

var _myCatalog = [];

/*AHA! This loop will be trigerred maybe when npm start in console, this particular loop
will create 9 objects, 9 widgets. They will be not seen until used somwhere else, when catalog will
be mapped and later result of mapping will be rendered to the view.
With push method those widgets created are being send to _catalog array.
Each widget will have 5 properties(keys) with values:
1) id np. Widget1
2) title Widget #1, Widget #2
3)summary the same for every widget
4)description the same
5)cost for now will be constant - first Widget = 1usd
second widget = 2usd etc.

LATER WE WILL WORK WITH THOS CREATED WIDGETS WITH ALL THEIR PROPS
THEY ARE OBJECTS, LIKE EVERYTHING IN JS, HELD IN ARRAY - catalog
*/



for (let i = 1; i < 9; i++) {
	_catalog.push( {
		'id': 'Widget' + i,
		'title': 'Widget #' + i,
		'summary': 'A great widget',
		'description': 'Zdrowaś Maryjo łaskiś pełna.',
		'cost': i,

	});
}

for (let i = 1; i < 4; i++) {
	_myCatalog.push( {
		'id': 'Circle' + i,
		'title': 'Circle #' + i,
		'summary': 'One circle',
		'description': 'What color do i have?',
		'size': i,

	});
}


console.log(_catalog);
/*cartItems array, later there will be sme objects stored here
as name may suggest it will be cartItems simply
*/
/*cartItems represents the items that a user has in the cart */
var _cartItems = [];

var _myCircleItems = [];

/*findIndex or find or both are es6 array method*/

/*My try to create custom method to color some elements, let's try maybe do this in most simple way using js then send it trough flux...*/




const _removeItem = ( item ) => {
	/*console.log("first remove console.log " + _cartItems );*/

	/*nothing calls this method so until it is called there will be no console log*/
	/*findIndex executes callback function on each element in the array until it returns true, then it return index
	of that one element, if never callback gets true function findIndex returns -1*/

	_cartItems.splice( _cartItems.findIndex( i => i === item), 1);
};

const _findCartItem = ( item ) => {
	/*console.log("second _findCartItem console.log " + _cartItems );*/

	return _cartItems.find( cartItem => cartItem.id === item.id );
};

const _increaseItem =  ( item ) => item.qty++;

const _decreaseItem = ( item ) => {
	item.qty--;
	if ( item.qty === 0 ) {
		_removeItem ( item )
	}
};

const _addItem = ( item ) => {
	const cartItem = _findCartItem ( item );
	if ( !cartItem ) {
		/*console.log("third console.log _addItem " + _cartItems );*/

		_cartItems.push ( Object.assign( { qty: 1 }, item ) );
	} else {
		_increaseItem( cartItem );
	}
};

const _cartTotals = (qty = 0, total = 0 ) => {

	/*console.log("4 _cartTotals counting console.log " + _cartItems );*/

	_cartItems.forEach( cartItem => {
		qty += cartItem.qty;
		total += cartItem.qty * cartItem.cost;
	} );
	return {qty , total};
};
/* REWRITE THIS FUNCTION BELOW
const _findCartItem = ( item ) => {

	return _cartItems.find( cartItem => cartItem.id === item.id );
};
*/
const _findCircleItem = ( item ) => {

	return _myCircleItems.find( cartItem => cartItem.id === item.id );
};

const _addCircleItem  = ( item ) => {
	const circleItem = _findCircleItem ( item );
	if (!circleItem ) {
		_myCircleItems.push ( Object.assign ( { qty: 1}, item ) );
	} else { _increaseItem ( circleItem) }
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
	getCart() {
		return _cartItems;
	},

	/*NOW HERE*/
	getTable() {
		return _myCircleItems;
	},


	getCatalog() {
		return _catalog.map(item => {
			return Object.assign( {}, item, _cartItems.find( cartItem => cartItem.id === item.id ))
		})
	},
	getCircleCatalog() {
		return _myCatalog.map(item => {
			return Object.assign( {}, item, _myCircleItems.find( myCircleItem => myCircleItem.id === item.id ))
		})
	},

	getCartTotals() {
		return _cartTotals();
	},
	/*action as a register parameter can be also called payload it 
	is payload send to dispatcher when action happens*/
	dispatcherIndex:register ( function ( action ) {
		switch (action.actionType) {
			case AppConstants.ADD_ITEM:
				_addItem (action.item );
				break;

				case AppConstants.REMOVE_ITEM:
				_removeItem (action.item );
				break;

				case AppConstants.INCREASE_ITEM:
				_increaseItem (action.item );
				break;

				case AppConstants.DECREASE_ITEM:
				_decreaseItem (action.item );
				break;
				case AppConstants.ADDCIRCLE_ITEM:
				_addCircleItem (action.item );
				break;





		}

		AppStore.emitChange ();
	})
});

export default AppStore;