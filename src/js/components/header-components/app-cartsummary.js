import React from 'react';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import { Link } from 'react-router';

const cartItems = () => {
	return 
}

const CartSummary = ( props ) => {
	return (
		<div style={{paddingTop: 15}} >
			<Link to="/cart" className="btn btn-success">
				Cart items
			</Link>
			<Link to="/" className="btn btn-success">
				Home
			</Link>
			
		</div>
		)
}

export default StoreWatchMixin( CartSummary, cartItems);
