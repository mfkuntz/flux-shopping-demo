var productData = require('./js/MockProductData').data;
var React = require('react');

var Router = require('react-router');
var routes = require('./js/routes.react');
import { Provider } from 'react-redux';

module.exports = {

	favicon: function(req, res){

	},

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

		var productData = require('./js/MockProductData').data;
		var state = require('./js/utils/dataInit')(productData);
		var store = require('./js/stores/createStore')(state);

		Router.run(routes, req.url, function(Handler){

			var markup = React.renderToString(

				<Provider store={store}>
				{ () =>
					<Handler/>	
				}
				</Provider>

				);

			res.render('home', {
				markup: markup,
				state: JSON.stringify(productData)
			});

		});



	}

}