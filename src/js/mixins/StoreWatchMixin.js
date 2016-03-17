/*NO MIXINS in ES6 it is only a name - this here  is called "HIGHER ORDER COMPONENT OR FUNCTION" */

/*"since our StoreWatchMixin keeps track of the state of our catalog component " */

import React from 'react';
import AppStore from '../stores/app-store.js';

export default ( InnerComponent, stateCallback) => class extends React.Component {

	constructor( props ) {
		super( props );
		this.state = stateCallback( props );
		this._onChange = this._onChange.bind(this);

	}
	componentWillMount(){
		AppStore.addChangeListener( this._onChange )
	}
	componentWillUnmount () {
		AppStore.removeChangeListener ( this._onChange )
	}
	_onChange () {
		this.setState( stateCallback( this.props ) )
	}
	render() {
		return <InnerComponent {...this.state } {...this.props } />
	}
}




/*Created with us of this from app-cart(with little changes - undearneth how it looked like in app-cart):

constructor() {
		super();
		this.state = cartItems();
		this._onChange = this._onChange.bind(this);

	}
	componentWillMount(){
		AppStore.addChangeListener( this._onChange )
	}
	componentWillUnmount () {
		AppStore.removeChangeListener ( this._onChange )
	}
	_onChange () {
		this.setState( cartItems )
	}

*/