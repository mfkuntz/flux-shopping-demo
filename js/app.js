window.React = require('react');

var productData = require('./MockProductData');
var cartApi = require('./utils/CartAPI');

var data = require('./utils/dataInit')(null);

//setup store
var store = require('./stores/createStore')(data);

//async API Call
cartApi.getProductData(store);


var App = require('./app.flux');
//render
React.render(
	<App store={store} />,
	document.getElementById('flux-cart')
);
