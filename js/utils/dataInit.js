var Immutable = require('immutable');

module.exports = function(products){
	var currentProduct, selectedVariant = null;
	
	var list;

	if (!Immutable.List.isList(products)){
		list = Immutable.List(products);
	}

	if (list){
		currentProduct = list.get(0);
		selectedVariant = list.get(0).variants[0];
	}

	return Immutable.Map({
		products: list,
		cart:{
			count: 0,
			items: new Immutable.List(),
			total: 0,
			visible: false,
		},
		currentProduct: currentProduct,
		selectedVariant: selectedVariant
	});
}