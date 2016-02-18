import React from 'react';
import AppStore from '../stores/app-store';
import CircleItem from './app-circleitem';
import StoreWatchMixin from '../mixins/StoreWatchMixin';

/*this function returns our catalog initial state, it returns here array held in key "items"  which
we later map  and asssign map result to let items then we can render it in a row*/
function getCircleCatalog() {
	return {items: AppStore.getCircleCatalog() }
}

const CircleCatalog = (props) => {

	
		let items = props.items.map( item => {
			return <CircleItem key={ item.id } item= { item } />
		});
		
		return (
			<div className="row">
			{ items }
			</div>
			)
	
}

export default StoreWatchMixin(CircleCatalog, getCircleCatalog );