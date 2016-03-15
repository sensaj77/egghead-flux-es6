import React from 'react';
import AppButton from '../button-components/app-button.js';


var data = [
      { planned: "Gorzkie żale" },
      { planned: "Koronka do miłosierdzia" },
      { planned: "Katecheza" }
    ];

export default class SelectInput extends React.Component  {
	constructor(props) {
    super(props)

    this.state = {
     /* products: this.props.products,
      currentProducts: this.props.products*/
      inputValue: "",
      myData: data
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);

  }
  handleChange (event) {

    this.setState({
    	inputValue: event.target.value,
    	
    })
  }
  handleSubmit (event) {
  	event.preventDefault();
  	console.log(this.state.inputValue);
    data.push({planned:this.state.inputValue});
    console.log(data);
    this.setState({
      myData : data
    })
  }
  handleRemove ( event ) {
    /*var selectobject=document.getElementById("select-dropdown");*/

    /*for (var i=0; i<selectobject.length; i++){
      if (selectobject.options[i].value == i )
         selectobject.remove(i);
    }*/
    console.log("remove");

  }
	render() {

    var selectOptionsJSX = this.state.myData.map(function ( item, index ) {

      return <option key={index} value={index}>{item.planned}</option>
    });
    
		return (

			<div>
  			<h1>Some playground instead of log out for now</h1>
  			<form onSubmit={this.handleSubmit}>
  				 <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
  			   <input className="waves-effect waves-light btn" type="submit" />
  			</form>
        <h3>Select element underneath</h3>
        <select id="select-dropdown">
         {selectOptionsJSX}
        </select>
        <AppButton handleRemove={this.handleRemove}/>
		  </div>
			);
	}
}