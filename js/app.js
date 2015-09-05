window.React = require('react');
var Router = require('react-router');

// var data = require('./utils/dataInit')(null);

// //setup store
// var store = require('./stores/createStore')(data);


// var App = require('./app.flux');

var routes = require('./routes.react');

Router.run(routes, Router.HistoryLocation, function(Handler){

	React.render(<Handler/>,
		document.getElementById('flux-cart'));

});

// //render
// React.render(
// 	<App store={store}/>,
// 	document.getElementById('flux-cart')
// );
