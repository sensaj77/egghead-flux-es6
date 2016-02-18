/*here will be individual circle, its view (jsx and javascript) */

import React from 'react';
import AppActions from '../../actions/app-actions';
import CartButton from '../cart-components/app-cart-button';





/*"since our StoreWatchMixin keeps track of the state of our catalog component " */

export default (props) => {
  
let divStyleFirst = {
  color: 'white',
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  backgroundColor: "red"

};
let divStyleSecond = {
  color: 'white',
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  backgroundColor: "brown"

};
let divStyleThird = {
  color: 'white',
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  backgroundColor: "yellow"

};
	return (
		<div className="col-xs-6 col-sm-4 col-md-3">
			<h4> item title: { props.item.title } </h4>
			<h4> item id: {props.item.id}  </h4>
			<h4> item key: {props.key}  </h4>
			<h4> item description: {props.item.description}  </h4>
			<div style={divStyleFirst}></div>
			  
			<CartButton handler={ AppActions.addCircleItem.bind(null, props.item) } txt="Add colored circle" />


		</div>
		)
}

