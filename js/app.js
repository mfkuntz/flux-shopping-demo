window.React = require('react');
import { Provider } from 'react-redux';
var productData = require('./MockProductData');
var cartApi = require('./utils/CartAPI');


var FluxCartApp = require('./components/FluxCartApp.react');


//load mock data into localStorage
productData.init();

//mock API Call
var data = cartApi.getProductData();

//setup store
var store = require('./stores/createStore')(data);

//render
React.render(
	<Provider store={store}>
		{() => <FluxCartApp />}
	</Provider>,
	document.getElementById('flux-cart')
);