var React = require('react');
import { connect } from 'react-redux'


var FluxProduct = require('./FluxProduct.react');
var FluxCart = require('./FluxCart.react');


function mapStateToProps(state) {
	return {
		cartItems: state.cartItems,
		count: state.count,
		cartTotal: state.cartTotal,
		cartVisible: state.cartVisible,
		selectedProduct: state.selectedProduct,
		product: state.product
	}
};

var fluxCartApp = React.createClass({

  	//render children
  	render: function(){

  		var { cartItems, count, cartTotal, cartVisible, selectedProduct, product } = this.props;

  		return (
  			<div className="flux-cart-app">
  				<FluxCart products={cartItems} count={count} total={cartTotal} visible={cartVisible}/>
  				<FluxProduct product={product} cartitems={cartItems} selected={selectedProduct}/>
			</div>

		);
  	}

});

module.exports = connect(mapStateToProps)(fluxCartApp);