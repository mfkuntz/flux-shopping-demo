var FluxCartConstants = require('../constants/FluxCartConstants');
var _ = require('lodash');
var Immutable = require('immutable');

// Add product to cart
function addProductToCart(sku, state) {
  var cart = state.get('cart');
  var items = cart.items;

  var cartItem = items.find((item) => {
    return item.sku === sku;
  });
  
  if (!cartItem){
    var product = state.get('currentProduct');
    cartItem = _.find(product.variants, {'sku' : sku});

    cartItem.quantity = 1;
    cart.items = items.push(cartItem);
    
  }else{
    
    var index = items.indexOf(cartItem);
    cartItem.quantity++;

    cart.items = items.set(index, cartItem);    
  }

  cart.total += cartItem.price;

  return cart;
}

// Remove item from cart
function removeItem(sku, state) {
  var cart = state.get('cart');
  var items = cart.items;

  var cartItem = items.find((item) => {
    return item.sku === sku;
  });

  if (!cartItem) return cart;
  var index = items.indexOf(cartItem);

  cart.items = items.delete(index);

  cart.total -= cartItem.price;

  return cart;
}


var cartReducer = function(state = {}, action) {

  console.log(action);
  console.log(state);

  switch(action.type) {

    // Respond to CART_ADD action
    case FluxCartConstants.CART_ADD:
      //action.sku, action.update
      var cart = addProductToCart(action.payload, state);
      var newCartState = state.set('cart', cart);
      return newCartState;

    // Respond to CART_VISIBLE action
    case FluxCartConstants.CART_VISIBLE:

      var cart = state.get('cart');
      cart.visible = action.payload;
      var newCartState =  state.set('cart', cart);
      return newCartState;

    // Respond to CART_REMOVE action
    case FluxCartConstants.CART_REMOVE:
      var cart = removeItem(action.payload, state);
      var newCartState =  state.set('cart', cart);
      return newCartState;

    default:
      return state;
  }


};

module.exports = {
  reducer: cartReducer,
  actions: [FluxCartConstants.CART_ADD, FluxCartConstants.CART_VISIBLE, FluxCartConstants.CART_REMOVE]
}
