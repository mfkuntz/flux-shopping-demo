window.React = require('react');
import { Provider } from 'react-redux';
var productData = require('./MockProductData');
var cartApi = require('./utils/CartAPI');

// React components for Redux DevTools
// import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

var FluxCartApp = require('./components/FluxCartApp.react');


var data = require('./utils/dataInit')(null);

//setup store
var store = require('./stores/createStore')(data);

//async API Call
cartApi.getProductData(store);

//render
React.render(
	<div>
		<Provider store={store}>
			{() => <FluxCartApp />}
		</Provider>

    </div>,
	document.getElementById('flux-cart')
);

	    // <DebugPanel top left bottom>
	    //   <DevTools store={store} monitor={LogMonitor} />
	    // </DebugPanel>