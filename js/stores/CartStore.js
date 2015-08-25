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

  var variant = state.get('selectedVariant');
  variant.inventory--;
  

  return state.withMutations(function(s){
    s.set('cart', cart).set('selectedVariant', variant);
  });

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

  //lookup inventory, and restore it
  var product = JSON.parse(localStorage.getItem('product'))[0];
  var variant = _.find(product.variants, function(p){
    return p.sku === sku;
  });

  //this is probably temporary. Because current product maintains a sepererate list of variants
  //we need to update it's reference too.
  //I'd like to make current variant an id and use current product as the source of truth
  var currentProduct = state.get('currentProduct');
  var currentVariantIndex = _.findIndex(currentProduct.variants, function(p){
    return p.sku === sku;
  });
  currentProduct.variants.splice(currentVariantIndex, 1, variant);

  return state.withMutations(function(s){
    s.set('cart', cart).set('selectedVariant', variant).set('currentProduct', currentProduct);
  });

   
}


var cartReducer = function(state = {}, action) {

  console.log(action);
  console.log(state);

  switch(action.type) {

    // Respond to CART_ADD action
    case FluxCartConstants.CART_ADD:
      //action.sku, action.update
      return addProductToCart(action.payload, state);

    // Respond to CART_VISIBLE action
    case FluxCartConstants.CART_VISIBLE:

      var cart = state.get('cart');
      cart.visible = action.payload;
      var newCartState =  state.set('cart', cart);
      return newCartState;

    // Respond to CART_REMOVE action
    case FluxCartConstants.CART_REMOVE:
      return removeItem(action.payload, state);

    default:
      return state;
  }


};

module.exports = {
  reducer: cartReducer,
  actions: [FluxCartConstants.CART_ADD, FluxCartConstants.CART_VISIBLE, FluxCartConstants.CART_REMOVE]
}
