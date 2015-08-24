// var dispatcher = require('../dispatcher/AppDispatcher');
var constants = require('../constants/FluxCartConstants');

var actions = {

	//initial product data
	recieveProduct: function(data){
		return {
			type: constants.RECEIVE_DATA,
			data: data
		};
	},
	// Set currently selected product variation
	selectProduct: function(index) {
		return {
			type: constants.SELECT_PRODUCT,
			data: index
		};
	},

	// Add item to cart
	addToCart: function(sku, update) {
		return {
			type: constants.CART_ADD,
			sku: sku,
			update: update
		};
	},

	// Remove item from cart
	removeFromCart: function(sku) {
		return {
			type: constants.CART_REMOVE,
			sku: sku
		};
	},

	// Update cart visibility status
	updateCartVisible: function(cartVisible) {
		return {
			type: constants.CART_VISIBLE,
			cartVisible: cartVisible
		};
	}

};

module.exports = actions;