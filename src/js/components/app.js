import React from 'react';
import AppActions from '../actions/app-actions';
import Catalog from './cart-components/app-catalog';
import Cart from './cart-components/app-cart';
import CircleCatalog from './circle-components/app-circle-catalog';
import CircleTable from './circle-components/app-circle-table';

export default class App extends React.Component {
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
}

