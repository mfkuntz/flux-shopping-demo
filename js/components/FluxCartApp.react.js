var React = require('react');
var CartStore = require('../stores/CartStore');
var ProductStore = require('../stores/ProductStore');
var FluxProduct = require('./FluxProduct.react');
var FluxCart = require('./FluxCart.react');


function getCartState(){
	return{
		product: ProductStore.getProduct(),
		selectedProduct: ProductStore.getSelected(),
		cartItems: CartStore.getCartItems(),
		cartCount: CartStore.getCartCount(),
		cartTotal: CartStore.getCartTotal(),
		cartVisible: CartStore.getCartVisible()
	};
};

var fluxCartApp = React.createClass({
	//from stores
	getInitialState: function(){
		return getCartState();
	},

	//add listeners
	componentDidMount: function(){
		ProductStore.addChangeListener(this._onChange);
		CartStore.addChangeListener(this._onChange);
	},

	//remove listeners
  	componentWillUnmount: function() {
	    ProductStore.removeChangeListener(this._onChange);
	    CartStore.removeChangeListener(this._onChange);
  	},

  	//render children
  	render: function(){
  		return (
  			<div className="flux-cart-app">
  				<FluxCart products={this.state.cartItems} count={this.state.count} total={this.state.cartTotal} visible={this.state.cartVisible}/>
  				<FluxProduct product={this.state.product} cartitems={this.state.cartItems} selected={this.state.selectedProduct}/>
			</div>

		);
  	},

  	_onChange: function(){
  		this.setState(getCartState());
  	}

});

module.exports = fluxCartApp;