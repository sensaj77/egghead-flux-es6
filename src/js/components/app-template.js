import React from 'react';
import Navbar from './navbar-components/app-navbar';
import Dashboard from './dashboard-components/dashboard.js';

export default ( props ) => {
	return (
		<div className="container">
			<Navbar></Navbar>
			<Dashboard />
			{props.children}
		</div>
		)
}


