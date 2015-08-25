var fluxCartActions = require('../actions/fluxCartActions');
var Immutable = require('immutable');

module.exports = {

	getProductData: function(store){
		var data = require('../MockProductData').data;
		var list = Immutable.List(data);

		setTimeout(function(){
			store.dispatch(fluxCartActions.recieveProduct(list));
		}, 50);
	}

};