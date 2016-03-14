import React from 'react';


export default class Dashboard extends React.Component  {
	constructor(props) {
    super(props)

    this.state = {
     /* products: this.props.products,
      currentProducts: this.props.products*/
    }

  }
	render() {
		return (
			<div className="row">
				<form className="col s12">
			      <div className="row">
			        <div className="input-field col s3">
			          <input id="icon_prefix" type="text" className="validate" />
			          <label htmlFor="icon_prefix">Project name</label>
			       </div>
			        <div className="input-field col s3">
			          <input id="icon_telephone" type="tel" className="validate" />
			          <label htmlFor="icon_telephone">Choose skills</label>
			        </div>
			        <div className="input-field col s3">
			          <input id="icon_telephone" type="tel" className="validate" />
			          <label htmlFor="icon_telephone">Choose user</label>
			        </div>
			        <div className="input-field col s3">
			          <input type="date" className="datepicker" />
			        </div>
			      </div>
			    </form>
					     
					      
		    </div>


			);
	}
}
