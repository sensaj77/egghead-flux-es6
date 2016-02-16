import React from 'react';
import AppStore from '../stores/app-store';
import AppCartItem from './app-cart-item';
import StoreWatchMixin from '../mixins/StoreWatchMixin';

const cartItems = () => {
	return { items: AppStore.getCart() }
}

const Cart = ( props ) => {
	
		var total = 0;

		/*"WE ARE MAPPING THROUGH OUR ITEMS IN OUR STATE?"*/

		/*items mapping changed from this.state to this.props - because of StoreWatchMixin added*/
		var items = props.items.map( ( item, i) => {
			let subtotal = item.cost * item.qty;
			total += subtotal;
			return (
				<AppCartItem
				subtotal={subtotal}
				key={i}
				item={item} />


				)
		} );
		return (
			<div>
				<h1>Cart</h1>
				<table className="table table-hover">
					<thead>
						<tr>
							<th></th>
							<th>Item</th>
							<th>Qty</th>
							<th></th>
							<th>Subtotal</th>
							<th>Star Wars Txt</th>
						</tr>
					</thead>
					<tbody>
						{items}
					</tbody>
					<tfoot>
						<tr>
							<td colSpan="4" className="text-right">Total</td>
							<td>${total}</td>
						</tr>
					</tfoot>
				</table>
			</div>

			)

}

/*IMPORTANT: WE DO NOT EXPORT CART AS BEFORE, WE ARE EXPORTING STOREWATCHMIXIN() WITH TWO PARAMETERS THAT WE DESCRIBED
IN STOREWATCHMIXIN.JS ---> Cart is paramater called InnerComponent, and cartItems is stateCallback parameter 
|
|
|
v
export default ( InnerComponent, stateCallback)
*/

export default StoreWatchMixin(Cart, cartItems) ;