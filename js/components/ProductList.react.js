var React = require('react');

var ProductListItem = require('./ProductListItem.react');


var list = React.createClass({


	render: function(){
		var products = [
		{
			name: "Scotch",
			description: "Very nice",
			price: 10,
			productID: 0
		},
		{
			name: "Beer",
			description: "Super Smooth",
			price: 5,
			productID: 1
		}
		];
		return (
			<ul>
				{
					products.map(function(product){

						return (
							<ProductListItem product={product}/>
						);

					})
				}
			</ul>
		);

	}

});

module.exports = list;