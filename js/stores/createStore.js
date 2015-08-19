import { createStore, combineReducers } from 'redux'

import cartReducer from './CartStore'

export default function(data){
	var reducer = cartReducer; //combineReducers();

	var store = createStore(reducer);

	return store;
}