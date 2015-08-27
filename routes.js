var productData = require('./js/MockProductData').data;
var React = require('react');
var App = require('./js/app.flux');
module.exports = {

	index: function(req, res){
		

		
		var markup = React.renderToString(App(productData));

		

		res.render('home', {
			markup: markup,
			state: JSON.stringify(productData)
		});
	}

}