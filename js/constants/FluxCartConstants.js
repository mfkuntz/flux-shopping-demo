var keys = {
  CART_ADD: null,       // Adds item to cart
  CART_REMOVE: null,    // Remove item from cart
  CART_VISIBLE: null,   // Shows or hides the cart
  SELECT_PRODUCT: null,   // Selects a product option
  RECEIVE_DATA: null    // Loads our mock data
};


Object.keys(keys).map(function(key){
	keys[key] = key;
});


// Define action constants
module.exports = keys;