window.React = require('react');

var data = require('./utils/dataInit')(null);

//setup store
var store = require('./stores/createStore')(data);


var App = require('./app.flux')(store);



//render
React.render(
	<App />,
	document.getElementById('flux-cart')
);
