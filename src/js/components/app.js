import React from 'react';
import AppActions from '../actions/app-actions';
import Catalog from './app-catalog';
import Cart from './app-cart';
import AppColoredElement from './app-colored-element';

export default class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Catalog />
				<Cart />
				<AppColoredElement />
			</div>

			)
	}
}


/*
<h1 onClick={AppActions.colorItem.bind(null, 'this is the item')}>Flux</h1>
*/