window.React = require('react');
var productData = require('./MockProductData');
var cartApi = require('./utils/CartAPI');
var FluxCartApp = require('./components/FluxCartApp.react');


//load mock data into localStorage
productData.init();

//mock API Call
cartApi.getProductData();

var store = requrie('./stores/createStore');
//render
React.render(
	<FluxCartApp store={store} />,
	document.getElementById('flux-cart')
);