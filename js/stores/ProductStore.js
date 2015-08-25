var fluxCartConstants = require('../constants/FluxCartConstants');

function loadProductData(data){
	// _product = data[0];
	// _selected = data[0].variants[0];
	alert('Load Product Data');
};

function setSelected(index, state){
	var selected = state.get('currentProduct').variants[index];
	var newState = state.set('selectedVariant', selected);
	return newState;
};

var productReducer = function(state = {}, action){

	switch(action.type){
		case fluxCartConstants.RECEIVE_DATA:
			loadProductData(action.data);
			return state;
			
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