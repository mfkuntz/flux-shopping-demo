// var dispatcher = require('../dispatcher/AppDispatcher');
var constants = require('../constants/FluxCartConstants');

var actions = {

	//initial product data
	recieveProduct: function(data){
		return {
			type: constants.RECEIVE_DATA,
			payload: data
		};
	},
	// Set currently selected product variation
	selectProduct: function(index) {
		return {
			type: constants.SELECT_PRODUCT,
			payload: index
		};
	},

	// Add item to cart
	addToCart: function(sku, update) {
		return {
			type: constants.CART_ADD,
			payload: sku
		};
	},

	// Remove item from cart
	removeFromCart: function(sku) {
		return {
			type: constants.CART_REMOVE,
			payload: sku
		};
	},

	// Update cart visibility status
	updateCartVisible: function(cartVisible) {
		return {
			type: constants.CART_VISIBLE,
			payload: cartVisible
		};
	}

};

module.exports = actions;