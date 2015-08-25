var React = require('react');
var cartActions = require('../actions/fluxCartActions');

var cart = React.createClass({

	closeCart: function(){
		this.props.dispatch(cartActions.updateCartVisible(false));
	},

	openCart: function(){
		this.props.dispatch(cartActions.updateCartVisible(true));
	},

	removeFromCart: function(sku){
		this.props.dispatch(cartActions.removeFromCart(sku));

		var items = this.props.products;
		//check against 1 since the removal is async. If 1 is left, then none will be after async
		if (items.size <= 1){
			this.props.dispatch(cartActions.updateCartVisible(false));
		}
	},

	render: function(){
		var self = this, products = this.props.products;
		var productCount = products.size;
		var prods = products.toArray();
		var cartCount = 0;
		
		return (

			<div className={"flux-cart " + (this.props.visible ? 'active' : '')}>
				<div className="mini-cart">
				  <button type="button" className="close-cart" onClick={this.closeCart}>×</button>
				  <ul>
					{	
						prods.map(function(product, i){
							cartCount += product.quantity;
							return (
								<li key={i}>
								  <h1 className="name">{product.name}</h1>
								  <p className="type">{product.type} x {product.quantity}</p>
								  <p className="price">${(product.price * product.quantity).toFixed(2)}</p>
								  <button type="button" className="remove-item" onClick={self.removeFromCart.bind(self, product.sku)}>Remove</button>
								</li>
					  		);
					})}
				  </ul>
				  <span className="total">Total: ${this.props.total}</span>
				</div>
				<button type="button" className="view-cart" onClick={this.openCart} disabled={productCount > 0 ? "" : "disabled"}>View Cart ({cartCount})</button>
			</div>

		);
	}
});

module.exports = cart;