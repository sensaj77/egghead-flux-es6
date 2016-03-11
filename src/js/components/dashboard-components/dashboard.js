import React from 'react';


const Dashboard = ( props ) => {
	
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
			          <label htmlFor="icon_telephone">User</label>
			        </div>
			      </div>
			    </form>
					     
					      
		    </div>


			)

}

export default Dashboard;