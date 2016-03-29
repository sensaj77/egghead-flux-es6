import React from 'react';


export default class Button extends React.Component  {
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
				<a className="waves-effect waves-light btn blue" onClick={this.props.handler}>Select</a>   
		    </div>
			);
	}
}