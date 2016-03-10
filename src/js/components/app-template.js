import React from 'react';
import Header from './header-components/app-header';

export default ( props ) => {
	return (
		<div className="container">
			<Header></Header>
			<h1>Home component</h1>
			{props.children}
		</div>
		)
}


