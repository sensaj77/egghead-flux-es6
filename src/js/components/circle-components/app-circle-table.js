import React from 'react';
import AppStore from '../../stores/app-store';
import AppTableItem from './app-circle-table-item';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';

const tableItems = () => {
	return { items: AppStore.getTable() }
}

const CircleTable = ( props ) => {
	
		var total = 0;

		/*"WE ARE MAPPING THROUGH OUR ITEMS IN OUR STATE?"*/

		/*items mapping changed from this.state to this.props - because of StoreWatchMixin added*/
		var items = props.items.map( ( item, i) => {


		/*	let subtotal = item.cost * item.qty;
			total += subtotal;*/

			return (
				<AppTableItem
				key={i}
				item={item} />


				)
		} );
		return (
			<div>
				<h1>CircleItem</h1>
				<table className="table table-hover">
					<thead>
						<tr>
							<th>Colored Circle</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{items}
					</tbody>
					<tfoot>
						<tr>
							<td colSpan="4" className="text-right">Total Size</td>
							<td></td>
						</tr>
					</tfoot>
				</table>
			</div>

			)

}

export default StoreWatchMixin(CircleTable, tableItems) ;