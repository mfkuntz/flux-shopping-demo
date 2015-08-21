
var EventEmitter = require('events').EventEmitter;
var FluxCartConstants = require('../constants/FluxCartConstants');
var _ = require('underscore');


// Add product to cart
function addProductToCart(sku, update, state) {
  update.quantity = (sku in state.products) ? state.products[sku].quantity + 1 : 1;
  return _.extend({}, state.products[sku], update);
}

// Remove item from cart
function removeItem(sku, state) {
  delete state.products[sku];
}

// Register callback with AppDispatcher
var cartReducer = function(state = {}, action) {

  console.log(action);
  console.log(state);

  switch(action.type) {

    // Respond to CART_ADD action
    case FluxCartConstants.CART_ADD:
      //action.sku, action.update
      var products = addProductToCart(action.sku, action.update, state);
      return {
        ...state,
        products
      }

    // Respond to CART_VISIBLE action
    case FluxCartConstants.CART_VISIBLE:
      return{
        ...state,
        cartVisible: action.cartVisible
      }

    // Respond to CART_REMOVE action
    case FluxCartConstants.CART_REMOVE:
      removeItem(action.sku, state);
      return state;

    default:
      return state;
  }


};

module.exports = cartReducer;