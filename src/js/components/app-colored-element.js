import React from 'react';
import AppStore from '../stores/app-store';



export default (props) => {
	console.log(AppStore.getCatalog());
	console.log(AppStore.getCart());
	console.log(AppStore.getCartTotals());
	return (
		<div>
				<h1>Colored element</h1>
				<table className="table table-hover">
					<thead>
						<tr>
							<th>Header text here</th>
							<th>Header text here</th>
							<th>Header text here</th>
							<th>Header text here</th>
							<th>Header text here</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>Something here</th>
							<th>Something here</th>
							<th>Something here</th>
							<th>Something here</th>
							<th>Something here</th>
						</tr>
						<tr>
							<th>Something here</th>
							<th>Something here</th>
							<th>Something here</th>
							<th>Something here</th>
							<th>Something here</th>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td colSpan="4" className="text-right">Something here</td>
							<td>$</td>
						</tr>
					</tfoot>
				</table>
			</div>

		)
}