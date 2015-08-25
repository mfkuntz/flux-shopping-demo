var fluxCartConstants = require('../constants/FluxCartConstants');
var Immutable = require('immutable');

function loadProductData(data, state){
	var currentProduct = Immutable.List.isList(data) ? data.get(0) : data[0];
	var currentVariant = currentProduct.variants[0];
	return state.withMutations((state) => {
		state.set('products', data).set('currentProduct', currentProduct).set('selectedVariant', currentVariant);
	});

};

function setSelected(index, state){
	var selected = state.get('currentProduct').variants[index];
	var newState = state.set('selectedVariant', selected);
	return newState;
};

var productReducer = function(state = {}, action){

	switch(action.type){
		case fluxCartConstants.RECEIVE_DATA:
			return loadProductData(action.payload, state);
			
		case fluxCartConstants.SELECT_PRODUCT:
			return setSelected(action.payload, state);

		default:
			return state;
	}
	
};

module.exports = {
	reducer: productReducer,
	actions: [fluxCartConstants.RECEIVE_DATA, fluxCartConstants.SELECT_PRODUCT] 
};