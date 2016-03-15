import React from 'react';


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
	render() {
    

    var selectOptionsJSX = this.state.myData.map(function ( item, index ) {

      return <option key={index} value={index}>{item.planned}</option>
    });
    
		return (

			<div>
  			<h1>Some playground instead of log out for now</h1>
  			<form onSubmit={this.handleSubmit}>
  				 <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
  			     <input type="submit" />
  			</form>
        <h3>Select element underneath</h3>
        <select >
         {selectOptionsJSX}
        </select>
		  </div>
			);
	}
}