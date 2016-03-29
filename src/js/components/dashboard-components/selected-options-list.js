import React from 'react';
import AppActions from '../../actions/app-actions';
import AppStore from '../../stores/app-store';


export default class SelectedOptionList extends React.Component  {
	constructor(props) {
    super(props)

    this.state = {
     selectedTasks: this.props.selectedTasks
    }
  }
  _onChange () {
    this.setState( this.state.selectedTasks )
  }
  componentWillMount(){
    AppStore.addChangeListener( this._onChange )
  }
  componentWillUnmount () {
    AppStore.removeChangeListener ( this._onChange )
  }
	render() {
		var selectedOptions = this.state.selectedTasks;
	    var selectedOptionsToMapJSX = selectedOptions.map(function ( item, index ) {
	      return <li key={index}>{item.text}</li>
	    });
	    console.log("here child component ",selectedOptionsToMapJSX);
		return (
			<div>
				<ul>
		          {selectedOptionsToMapJSX}
		        </ul>   
		    </div>
			);
	}
}