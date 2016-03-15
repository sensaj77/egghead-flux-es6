import React from 'react';


var data = [
      { planned: "Gorzkie żale", id: 1 },
      { planned: "Koronka do miłosierdzia", id: 2 },
      { planned: "Katecheza", id: 3 }
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
    console.log(this.state.inputValue);
  }
  handleSubmit (event) {
  	event.preventDefault();
  	console.log(this.state.inputValue)
    

  }
	render() {
    

    var selectOptionsJSX = this.state.myData.map(function ( item ) {
      return <option key={item.id} value={item.id}>{item.planned}</option>
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