var React = require('react');
import { connect } from 'react-redux'

var FluxProduct = require('./FluxProduct.react');
var FluxCart = require('./FluxCart.react');


function mapStateToProps(state) {
	var product = state.get('products').get(0);
	var cart = state.get('cart');
	return {
		cartItems: cart.items,
		count: cart.count,
		cartTotal: cart.total,
		cartVisible: cart.visible,
		selectedProduct: state.get('currentSku'),
		product: product
	}
};

class fluxCartApp extends React.Component{

  	//render children
  	render (){

  		var { cartItems, count, cartTotal, cartVisible, selectedProduct, product } = this.props;

  		return (
  			<div className="flux-cart-app">
  				<FluxCart products={cartItems} count={count} total={cartTotal} visible={cartVisible}/>
  				<FluxProduct product={product} selected={selectedProduct}/>
			</div>

		);
  	}

};

module.exports = connect(mapStateToProps)(fluxCartApp);