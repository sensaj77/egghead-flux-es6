import AppConstants from '../constants/app-constants';
import { dispatch , register } from '../dispatchers/app-dispatcher';

export default {
	
	removeItem ( item ) {
		dispatch({
			actionType: AppConstants.REMOVE_ITEM, item
		})
	},
	addItem ( item ) {
		dispatch({
			actionType: AppConstants.ADD_ITEM, item
		})
	},
	addTodo ( text ) {
		dispatch({
			actionType: AppConstants.TODO_CREATE,
			text: text
		})
	},
	destroyTodo ( id ) {
		dispatch ({
			actionType: AppConstants.TODO_DESTROY,
			id: id
		})
	}

}