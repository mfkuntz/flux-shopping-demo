import { createStore, combineReducers } from 'redux'
var Immutable = require('immutable');
import cartReducer from './CartStore'
import productReducer from './ProductStore'


// let combineImmutableReducers = reducers => {
//   var combined_reducers = combineReducers(reducers);

//   return (state,action) => Immutable.Map(combined_reducers(
//       Immutable.Map.isMap(state) ? state.toObject() : state,action
//   ));
// }



export default function(data){
	var reducer = combineReducers([cartReducer, productReducer]);

	data = data.toObject();

	var store = createStore(reducer, data);

	return store;
}

