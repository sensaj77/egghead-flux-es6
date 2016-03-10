import React from 'react';
import Cart from './cart-components/app-cart';
import Template from './app-template';
import { Router, Route , IndexRoute } from 'react-router';

export default () => {
	return (
		<Router>
			<Route path="/" component={Template} >
				<IndexRoute  />
				<Route path="cart" component= { Cart } />
			</Route>
		</Router>
		);
}
//OLD VIEW


/*export default class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Catalog />
				<Cart />
			</div>

			)
	}
}

*/