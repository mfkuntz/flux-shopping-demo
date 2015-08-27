window.React = require('react');

var data = require('./utils/dataInit')(null);

//setup store
var store = require('./stores/createStore')(data);


var App = require('./app.flux');



//render
React.render(
	<App store={store}/>,
	document.getElementById('flux-cart')
);
