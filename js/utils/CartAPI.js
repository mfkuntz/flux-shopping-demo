var fluxCartActions = require('../actions/fluxCartActions');

module.exports = {

	getProductData: function(){
		var data = JSON.parse(localStorage.getItem('product'));
		return data;
	}

};