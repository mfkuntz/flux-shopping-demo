import { createStore, combineReducers } from 'redux'

import cartReducer from './CartStore'

export default function(data){
	var reducer = cartReducer;//combineReducers(cartReducer);

	var store = createStore(reducer, data);

	return store;
}