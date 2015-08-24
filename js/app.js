window.React = require('react');
import { Provider } from 'react-redux';
var productData = require('./MockProductData');
var cartApi = require('./utils/CartAPI');

// React components for Redux DevTools
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

var FluxCartApp = require('./components/FluxCartApp.react');


//load mock data into localStorage
productData.init();

//mock API Call
var products = cartApi.getProductData();
var data = require('./utils/dataInit')(products);

//setup store
var store = require('./stores/createStore')(data);

//render
React.render(
	<div>
		<Provider store={store}>
			{() => <FluxCartApp />}
		</Provider>
	    <DebugPanel top right bottom>
	      <DevTools store={store} monitor={LogMonitor} />
	    </DebugPanel>
    </div>,
	document.getElementById('flux-cart')
);