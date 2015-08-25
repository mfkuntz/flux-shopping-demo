var FluxCartConstants = require('../constants/FluxCartConstants');
var _ = require('lodash');
var Immutable = require('immutable');

// Add product to cart
function addProductToCart(sku, state) {
  var cart = state.get('cart');
  var items = cart.items;
  if (items.length === 0){items = Immutable.List([]);}

  var cartIndex = items.indexOf((item) => {
    return item.sku === sku;
  });
  

  if (cartIndex === -1){
    var product = state.get('currentProduct');
    var variant = _.find(product.variants, {'sku' : sku});

    variant.quantity = 1;
    cart.items = items.push(variant);
    return cart;
  }

  var inCart = items.get(cartIndex);
  inCart.quantity++;

  cart.items = items.set(cartIndex, inCart);
  return cart;
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
      var cart = addProductToCart(action.payload, state);
      return state.set('cart', cart);

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

module.exports = {
  reducer: cartReducer,
  actions: [FluxCartConstants.CART_ADD, FluxCartConstants.CART_VISIBLE, FluxCartConstants.CART_REMOVE]
}
