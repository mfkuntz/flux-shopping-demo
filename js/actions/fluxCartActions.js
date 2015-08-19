// var dispatcher = require('../dispatcher/AppDispatcher');
var constants = require('../constants/FluxCartConstants');

var actions = {

	//initial product data
	recieveProduct: function(data){
		dispatcher.handleAction({
			actionType: constants.RECEIVE_DATA,
			data: data
		});
	},
	// Set currently selected product variation
	selectProduct: function(index) {
		dispatcher.handleAction({
			actionType: constants.SELECT_PRODUCT,
			data: index
		});
	},

	// Add item to cart
	addToCart: function(sku, update) {
		dispatcher.handleAction({
			actionType: constants.CART_ADD,
			sku: sku,
			update: update
		});
	},

	// Remove item from cart
	removeFromCart: function(sku) {
		dispatcher.handleAction({
			actionType: constants.CART_REMOVE,
			sku: sku
		})
	},

	// Update cart visibility status
	updateCartVisible: function(cartVisible) {
		dispatcher.handleAction({
			actionType: constants.CART_VISIBLE,
			cartVisible: cartVisible
		});
	}

};

module.exports = actions;