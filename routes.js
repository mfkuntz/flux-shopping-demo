var productData = require('./js/MockProductData').data;
var React = require('react');

var Router = require('react-router');
var routes = require('./js/routes.react');

module.exports = {

	index: function(req, res){
		
		var state = require('./js/utils/dataInit')(productData);
		var store = require('./js/stores/createStore')(state);

		var markup = '';//React.renderToString(<App store={store} />);

		res.render('home', {
			markup: markup,
			state: JSON.stringify(productData)
		});
	},
	react: function(req,res){
		var state = require('./js/utils/dataInit')(productData);


		Router.run(routes, req.url, function(Handler){

			var markup = React.renderToString(<Handler/>);

			res.render('home', {
				markup: markup,
				state: JSON.stringify(productData)
			});

		});



	}

}