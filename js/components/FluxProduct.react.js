var React = require('react');
var cartActions = require('../actions/fluxCartActions');

var product = React.createClass({

	addToCart: function(event){
		var sku = this.props.selected.sku;
		var update = {
			name: this.props.product.name,
			type: this.props.selected.type, 
			price: this.props.selected.price
		};

		cartActions.addToCart(sku, update);
		cartActions.updateCartVisible(true);
	},

	selectVariant:function(event){
		cartActions.selectProduct(event.target.value);
	},

	render: function(){
		var stock = (this.props.selected.sku in this.props.cartitems)? 
			this.props.selected.inventory - this.props.cartitems[this.props.selected.sku].quantity : 
			this.props.selected.inventory;

		return (

			<div className="flux-product">
				<img src={'img/' + this.props.product.image} />
				<div className="flux-product-detail">
					<h1 className="name">{this.props.product.name}</h1>
					<p className="description">{this.props.product.description}</p>
					<p className="price">Price: ${this.props.selected.price}</p>
					<select onChange={this.selectVariant}>
						{
							this.props.product.variants.map(function(item, index){
								return (
									<option key={index} value={index}>{item.type}</option>
									);
							})
						}
					</select>
					<button type="button" onClick={this.addToCart} disabled={stock > 0 ? '' : 'disabled'}>
						{stock > 0 ? 'Add To Cart' : 'Sold Out'}
					</button>
				</div>
			</div>
		);
	}

});

module.exports = product;