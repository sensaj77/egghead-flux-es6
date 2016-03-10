import React from 'react';
import { Link } from 'react-router';


const CartSummary = ( props ) => {
	return (
		<div style={{paddingTop: 15}} >
			<Link to="/" className="btn btn-success">
				Dashboard
			</Link>
			<Link to="/cart" className="btn btn-success">
				Settings
			</Link>
			
		</div>
		)
}

export default CartSummary;
