import React from 'react';
import AppButton from '../button-components/app-button.js';
import AppActions from '../../actions/app-actions';
import AppStore from '../../stores/app-store';
import SelectedOptionList from './selected-options-list';


const getDefaultRelationshipTasks = () => {
  return { relationshipTasks: AppStore.defaultRelationshipTasks() }
}
const getSelectedTasks = () => {
  return { selectedRelationshipTasks: AppStore.selectedTasks() }
}

export default class SelectInput extends React.Component  {
	constructor(props) {
    super(props)

    this.state = {

      stateRelationshipTasks: getDefaultRelationshipTasks().relationshipTasks,

      selectedTasks: getSelectedTasks().selectedRelationshipTasks,
    };
  
    this._onChange = this._onChange.bind(this);
    this.handleSelecting = this.handleSelecting.bind(this);
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
  handleSelecting(  ) {
    var actualSelected = this.refs.dropdown;
    AppActions.addItem ( actualSelected.value );
    this.setState({
      selectedTasks : getSelectedTasks().selectedRelationshipTasks
    })
    console.log("hello", this.state.selectedTasks);
  }

  /*button with this handler, that when clicked will render selected items to the view*/
  renderSelected( text ){
    console.log(text);
  }

	render() {
    var stateRelationshipTasksToMap = this.state.stateRelationshipTasks;
    var selectListRelationshipTasksJSX = stateRelationshipTasksToMap.map(function ( item, index ) {
      return <option key={index} value={item.text}>{item.text}</option>
    });
		return (

			<div>
        <h3>Select element underneath</h3>
        <select ref="dropdown" name="selectList" >
         {selectListRelationshipTasksJSX}
        </select>
        <AppButton handler={this.handleSelecting} buttonName="Select" />
        <AppButton handler={this.renderSelected} buttonName="Render" />
        <SelectedOptionList selectedTasks={this.state.selectedTasks} />
		  </div>
			);
	}
}


/*handleSubmit (event) {
    console.log(this.state.myData);
    event.preventDefault();
    this.state.myData.push({planned:this.state.inputValue});
    this.setState({
      myData : this.state.myData
    })
    console.log(this.state.myData);
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

  <form onSubmit={AppActions.addTodo}>
           <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
           <input className="waves-effect waves-light btn" type="submit" />
        </form>


handleChange (event) {

    this.setState({
      inputValue: event.target.value,
      
    })
  }
      */