var Immutable = require('immutable');

module.exports = function(products){
	return Immutable.Map({
		products: products,
		cart:{
			count: 0,
			items: [],
			total: 0,
			visible: false,
		},
		currentProduct: products.get(0),
		selectedVariant: products.get(0).variants[0]
	});
}