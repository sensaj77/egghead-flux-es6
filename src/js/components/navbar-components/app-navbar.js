import React from 'react';
import { Link } from 'react-router';

export default () => {
	return (
		<div className="row" >
			<nav className=" light-blue">
			    <div className="nav-wrapper">
			      
			      <ul id="nav-mobile" className="left hide-on-med-and-down ">
			      	<li><Link to="dashboard" >
						Propsy
					</Link></li>
			        <li><Link to="dashboard" >
						Dashboard
					</Link></li>
			        <li><Link to="/cart" >
						Settings
					</Link ></li>
					<li><Link to="input-test" >
						Log out
					</Link ></li>
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