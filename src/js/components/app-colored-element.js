import React from 'react';

export default (props) => {

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