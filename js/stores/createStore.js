import { createStore } from 'redux'
var Immutable = require('immutable');
import cartReducer from './CartStore'
import productReducer from './ProductStore'


// let combineImmutableReducers = reducers => {
//   var combined_reducers = combineReducers(reducers);

//   return (state,action) => Immutable.Map(combined_reducers(
//       Immutable.Map.isMap(state) ? state.toObject() : state,action
//   ));
// }

function combineReducers(reducers){

	return function(state = {}, action){

		for(var i = 0; i < reducers.length; i++){
			var r = reducers[i];
			if (r.actions.indexOf(action.type) > -1){
				return r.reducer(state, action);
			}

		}

		//default, make sure we keep the state
		return state;

	}
		
}


export default function(data){
	var reducer = combineReducers([cartReducer, productReducer]);

	var store = createStore(reducer, data);

	return store;
}

