import React from 'react';
import AppButton from '../button-components/app-button.js';
import AppActions from '../../actions/app-actions';
import AppStore from '../../stores/app-store';



const getLogData = () => {
  return { myItems: AppStore.getDefaultOptions()}
}

export default class SelectInput extends React.Component  {
	constructor(props) {
    super(props)

    this.state = {
     /* products: this.props.products,
      currentProducts: this.props.products*/
      inputValue: "",
      myData: getLogData().myItems
    };
  
    this._onChange = this._onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);

  }
  _onChange () {
    this.setState( this.state.myData )
  }
  componentWillMount(){
    AppStore.addChangeListener( this._onChange )
  }
  componentWillUnmount () {
    AppStore.removeChangeListener ( this._onChange )
  }
  handleChange (event) {

    this.setState({
    	inputValue: event.target.value,
    	
    })
  }
  handleSubmit (event) {
    console.log(this.state.myData);
  	event.preventDefault();
    myData.push({planned:this.state.inputValue});
    this.setState({
      myData : myData
    })
  }
  handleRemove ( event ) {

    console.log("remove");
    var actualData = this.state.myData;
    var selectedItem = this.refs.dropdown;
      if(selectedItem.selectedIndex !== -1) {
        
        actualData.splice(selectedItem.selectedIndex, 1);
      } else {

        console.log("something works after else");
        
      }
    
    this.setState({
      myData : actualData
    })

  }
	render() {

    console.log(this.state.myData);
    var myDataJSX = this.state.myData;
    console.log(myDataJSX);
    var selectOptionsJSX = myDataJSX.map(function ( item, index ) {

      return <option key={index} value={index}>{item.planned}</option>
    });
    
		return (

			<div>
  			<h1 onClick={AppActions.addItem.bind(null, "this is event/ item")}>Some playground instead of log out for now</h1>
  			<form onSubmit={this.handleSubmit}>
  				 <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
  			   <input className="waves-effect waves-light btn" type="submit" />
  			</form>
        <h3 onClick={AppStore.logActualOptions}>Select element underneath</h3>
        <select ref="dropdown">
         {selectOptionsJSX}
        </select>
        <AppButton handler={AppActions.removeItem} />
		  </div>
			);
	}
}