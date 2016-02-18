/*here will be individual circle, its view (jsx and javascript) */

import React from 'react';
import AppActions from '../actions/app-actions';
import CartButton from './app-cart-button';


var divStyleFirst = {
  color: 'white',
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  backgroundColor: "red"

};
var divStyleSecond = {
  color: 'white',
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  backgroundColor: "brown"

};
var divStyleThird = {
  color: 'white',
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  backgroundColor: "yellow"

};



/*"since our StoreWatchMixin keeps track of the state of our catalog component " */

export default (props) => {
	return (
		<div className="col-xs-6 col-sm-4 col-md-3">
			<h4>{ props.item.title } </h4>
			<h4> id: {props.item.id}  </h4>
			<h4> key: {props.key}  </h4>
			<h4> {props.item.description}  </h4>
			<div style={divStyleFirst}></div>
			  
			<CartButton handler={ AppActions.addItem.bind(null, props.item) } txt="Add colored circle" />


		</div>
		)
}

