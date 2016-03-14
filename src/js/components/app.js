import React from 'react';
import Settings from './settings-components/settings.js';
import Template from './app-template';
import Dashboard from './dashboard-components/dashboard.js';
import ChooseInput from './dashboard-components/choose-input.js';
import { Router, Route , IndexRoute } from 'react-router';

export default () => {
	return (
		<Router>
			<Route path="/" component={Template} >
				<IndexRoute  />
				<Route path="dashboard" component= { Dashboard } />
				<Route path="cart" component= { Settings } />
				<Route path="input-test" component= { ChooseInput } />
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
				<Settings />
			</div>

			)
	}
}

*/