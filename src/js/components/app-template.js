import React from 'react';
import Navbar from './navbar-components/app-navbar';

export default ( props ) => {
	return (
		<div className="container">
			<Navbar></Navbar>
			{props.children}
		</div>
		)
}


