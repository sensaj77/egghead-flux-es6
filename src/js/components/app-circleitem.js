/*here will be individual circle, its view (jsx and javascript) */

import React from 'react';
import AppActions from '../actions/app-actions';
import CartButton from './app-cart-button';


/*"since our StoreWatchMixin keeps track of the state of our catalog component " */

export default (props) => {
	return (
		<div className="col-xs-6 col-sm-4 col-md-3">
			<h4>{ props.item.title } </h4>
			<img src="http://placehold.it/250x250" width="100%" className="img-responsive" />
			 
			<CartButton handler={ AppActions.addItem.bind(null, props.item) } txt="Add To Cart" />


		</div>
		)
}

