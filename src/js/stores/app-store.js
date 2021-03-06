import { dispatch, register } from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';
import { EventEmitter } from 'events';


//value = change will be broadcasted every time smth changes in our app
const CHANGE_EVENT = 'change';

var _catalog = [];

/*AHA! Ta pętla się odpali chyba po npm start i byc moze
nawet inne funkcje tez. Ta konkretna stworzy 9 widgetów
One sie nie pojawia na widoku, tylko będą istniec w _catalog
Dzieki metodzie push . Kazdy bedzie mial 5 properties:
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

/*cartItems array, later there will be sme objects stored here
as name may suggest it will be cartItems simply
*/

var cartItems = [];

/*findIndex is es6 array method*/

const _removeItem = ( item ) => {
	_cartItems.splice( _cartItems.findIndex( i => i === item), 1);
};

const _removeItem = ( item ) => {
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
		_cartItems.push ( Object.assign( { qty: 1 }, item ) );
	} else {
		_increaseItem(cartItem);
	}
};

const _cartTotals = (qty = 0, total = 0 ) => {
	_cartItems.forEach( cartItem => {
		qty += cartItem.qty;
		total += cartItem.qty * cartItem.cost;
	});
	return {qty , total}
};

const AppStore = Object.assign(EventEmitter.prototype,
{
	emitChange(){
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
	getCatalog() {
		return _catalog.map(item => {
			return Object.assign( {}, item, _cartItems.find ( cItem => cItem.id ===
				item.id ))
		})
	},

	getCartTotals() {
		return _cartTotals();
	},

	dispatcherIndex:register ( function ( action) {
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




		}

		AppStore.emitChange ();
	})
});

export default AppStore;