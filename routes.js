var productData = require('./js/MockProductData').data;
var React = require('react');
var App = require('./js/app.flux');
module.exports = {

	index: function(req, res){
		
		var state = require('./js/utils/dataInit')(productData);
		var store = require('./js/stores/createStore')(state);

		
		
		var factory = React.createFactory(App(store));
		var markup = React.renderToString(factory({store: store}));

		

		res.render('home', {
			markup: markup,
			state: JSON.stringify(productData)
		});
	}

}