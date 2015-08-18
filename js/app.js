window.React = require('react');
var productData = require('./MockProductData');
var cartApi = require('./utils/CartAPI');
var FluxCartApp = require('./components/FluxCartApp.react');


//load mock data into localStorage
productData.init();

//mock API Call
cartApi.getProductData();

//render
React.render(
	<FluxCartApp />,
	document.getElementById('flux-cart')
);