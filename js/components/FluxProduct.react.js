var React = require('react');
import { connect } from 'react-redux'

var cartActions = require('../actions/fluxCartActions');

function mapToState(state){
	var products = state.get('products');
	var product = products.get(0);
	var selectedVarient = product.variants[0];

	return {
		product: product,
		selected : selectedVarient
	}
}

var product = React.createClass({

	addToCart: function(event){

		this.props.dispatch(cartActions.addToCart(this.props.selected.sku));
		this.props.dispatch(cartActions.updateCartVisible(true));
	},

	selectVariant:function(event){
		this.props.dispatch(cartActions.selectProduct(event.target.value));
	},

	render: function(){
		if (!this.props.product) return (
			<div className="flux-product">
				<div className="flux-product-detail">
					<h1 className="name">Loading!</h1>
				</div>
			</div>);

		return (

			<div className="flux-product">
				<img src={'../assets/img/' + this.props.product.image} />
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
					<button type="button" onClick={this.addToCart} disabled={this.props.selected.inventory > 0 ? '' : 'disabled'}>
						{this.props.selected.inventory > 0 ? 'Add To Cart' : 'Sold Out'}
					</button>
				</div>
			</div>
		);
	}

});

module.exports = connect(mapToState)(product);