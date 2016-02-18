import React from 'react';
import Catalog from './cart-components/app-catalog';
import Cart from './cart-components/app-cart';
import CircleCatalog from './circle-components/app-circle-catalog';
import CircleTable from './circle-components/app-circle-table';
import Template from './app-template';
import { Router, Route , IndexRoute } from 'react-router';

export default () => {
	return (
		<Router>
			<Route path="/" component={Template} >
				<IndexRoute component={Catalog} />
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
				<CircleCatalog />
				<CircleTable />
			</div>

			)
	}
}*/

