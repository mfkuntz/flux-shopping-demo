var fluxCartActions = require('../actions/fluxCartActions');
var Immutable = require('immutable');

module.exports = {

	getProductData: function(){
		var data = JSON.parse(localStorage.getItem('product'));


		return Immutable.List(data);
	}

};