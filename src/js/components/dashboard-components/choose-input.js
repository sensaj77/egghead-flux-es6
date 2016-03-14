import React from 'react';

export default class SelectInput extends React.Component  {
	constructor(props) {
    super(props)

    this.state = {
     /* products: this.props.products,
      currentProducts: this.props.products*/
    }

  }
	render() {
		return (
			<div>
 				
				<h1>Some playground instead of log out for now</h1>
				<select>
				  <option value="volvo">Volvo</option>
				  <option value="saab">Saab</option>
				  <option value="mercedes">Mercedes</option>
				  <option value="audi">Audi</option>
				</select>
		    </div>


			);
	}
}