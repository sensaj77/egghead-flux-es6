import React from 'react';
import AppActions from '../actions/app-actions';
import Catalog from './app-catalog';
import Cart from './app-cart';
import CircleCatalog from './app-circle-catalog';
import CircleTable from './app-circle-table';

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

