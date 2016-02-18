import React from 'react';
import AppActions from '../../actions/app-actions';
import CartButton from './app-cart-button';
import ColorButton from './app-color-button';
import { Link } from 'react-router';


/*"since our StoreWatchMixin keeps track of the state of our catalog component " */

export default (props) => {
	let itemStyle = {
		borderBottom: '1px solid #ccc',
		paddingBottom: 15
	}
	return (
		<div className="col-xs-6 col-sm-4 col-md-3" style={itemStyle}>
			<h4>{ props.item.title } </h4>
			<img src="http://placehold.it/250x250" width="100%" className="img-responsive" />
			<p> {props.item.summary } </p>
			<p> $ { props.item.cost }
				<span className="text-success">
					{props.item.qty && `(${props.item.qty} in cart)`}
				</span>
			 </p>
			<div className="btn-group">
				<Link to={`/item/${props.item.id}` } className="btn btn-default btn-sm">Learn More</Link>
				<CartButton handler={ AppActions.addItem.bind(null, props.item) } txt="Add To Cart" />
			</div>
			<ColorButton colorHandler={ AppActions.addCircleItem.bind(null, props.item) } txtToColor="Color Cart" />

		</div>
		)
}