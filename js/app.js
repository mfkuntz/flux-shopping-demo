window.React = require('react');
var Router = require('react-router');
import { Provider } from 'react-redux';

function getStore(){
	if (typeof document !== "undefined"){
		var products = document.getElementById('initial-state').innerHTML;

		if (products){
			localStorage.clear();
			localStorage.setItem('product', products);
			products = JSON.parse(products);
		}
		var data = require('./utils/dataInit')(products);

		//setup store
		var store = require('./stores/createStore')(data);

		return store;
	}

	var productData = require('./MockProductData').data;
	var state = require('./utils/dataInit')(productData);
	var store = require('./stores/createStore')(state);
	return store;
}

var routes = require('./routes.react');
var store = getStore();

Router.run(routes, Router.HistoryLocation, function(Handler){

	React.render(

		<Provider store={store}>
		{ () =>
			<Handler/>	
		}
		</Provider>
		,
		document.getElementById('flux-cart'));

});

// //render
// React.render(
// 	<App store={store}/>,
// 	document.getElementById('flux-cart')
// );
