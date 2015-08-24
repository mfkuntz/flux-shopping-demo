import { compose, createStore } from 'redux'
var Immutable = require('immutable');
import cartReducer from './CartStore'
import productReducer from './ProductStore'

import { devTools, persistState } from 'redux-devtools';


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

	const composer = compose(
		devTools(),
		persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
		createStore
	);

	var store = composer(reducer, data);

	return store;
}

