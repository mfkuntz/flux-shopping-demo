var React = require('react');
var Router = require('react-router');

var {DefaultRoute, Link, Route, RouteHandler} = Router;

var FluxCartApp = require('./components/FluxCartApp.react');

var FluxProduct = require('./components/FluxProduct.react');
var ProductList = require('./components/ProductList.react');

var routes = (
	<Route handler={FluxCartApp} path="/" >
		<Route name="products" >
			<Route name="product" path=":productID" handler={FluxProduct}/>
		</Route>
		<DefaultRoute handler={ProductList} />
	</Route>
);


module.exports = routes;