import React from 'react';
import CartSummary from './app-cartsummary';
import { Link } from 'react-router';

export default () => {
	return (
		<div className="row" >
			<nav className=" light-blue">
			    <div class="nav-wrapper">
			      
			      <ul id="nav-mobile" className="left hide-on-med-and-down ">
			      	<li><Link to="/" >
						Propsy
					</Link></li>
			        <li><Link to="/" >
						Dashboard
					</Link></li>
			        <li><Link to="/cart" >
						Settings
					</Link></li>
					<li>Log out</li>
			      </ul>
			    </div>
			 </nav>
		</div>
		)
}



/*//OLD View
export default () => {
	return (
		<div className="row" style={{borderBottom: '1px solid #ccc'}}>
			
			<div className="col-sm-10 text-right">
				<CartSummary />
			</div>
		</div>
		)
}*/