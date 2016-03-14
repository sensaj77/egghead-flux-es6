import React from 'react';


const Settings = ( props ) => {
	
		return (
			<div>
				<h1>Settings component</h1>
			</div>

			)

}

/*IMPORTANT: WE DO NOT EXPORT CART AS BEFORE, WE ARE EXPORTING STOREWATCHMIXIN() WITH TWO PARAMETERS THAT WE DESCRIBED
IN STOREWATCHMIXIN.JS ---> Cart is paramater called InnerComponent, and cartItems is stateCallback parameter 
|
|
|
v
export default ( InnerComponent, stateCallback)
*/

export default Settings;