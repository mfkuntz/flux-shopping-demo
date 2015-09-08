var React = require('react');
var Router = require('react-router');

var {DefaultRoute, Link, Route, RouteHandler} = Router;

var App = require('./app.flux');

var FluxProduct = require('./components/FluxProduct.react');
var ProductList = require('./components/ProductList.react');

var routes = (
	<Route handler={App} path="/" >
		<Route name="products" >
			<Route name="product" path=":productID" handler={FluxProduct}/>
		</Route>
		<DefaultRoute handler={ProductList} />
	</Route>
);


module.exports = routes;