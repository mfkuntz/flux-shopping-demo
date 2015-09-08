var React = require('react');

var Link = require('react-router').Link;

var listItem = React.createClass({

	handleClick: function(event){
		
	},
	render: function(){

		var product = this.props.product;
		return (
			<li className="product-list-item" onClick={this.handleClick}>
				<Link to="product" params={{productID:product.productID}}>
					<div className="flux-product-detail">
						<h3 className="name">{product.name}</h3>
						<p className="description">{product.description}</p>
						<p className="price">Price: ${product.price}</p>
					</div>
				</Link>
			</li>
		);

	}

});

module.exports = listItem;