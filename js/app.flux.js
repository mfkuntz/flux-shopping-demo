var React = require('react');
var FluxCartApp = require('./components/FluxCartApp.react');
import { Provider } from 'react-redux';

module.exports = React.createClass({

		getInitialState: function(){

			if (this.props && this.props.store){
				return {store: this.props.store}
			}

			if (typeof document !== "undefined"){
				var products = document.getElementById('initial-state').innerHTML;
		
				if (products){
					localStorage.clear();
					localStorage.setItem('product', products);
					products = JSON.parse(products);
				}
				var data = require('./utils/dataInit')(products);

				//setup store
				var store = require('./stores/createStore')(data);

				return {store:store};
			}

			var productData = require('./MockProductData').data;
			var state = require('./utils/dataInit')(productData);
			var store = require('./stores/createStore')(state);
			return {store:store};

		},

		render: function(){
			return (
				<Provider store={this.state.store}>
					{() => <FluxCartApp />}
				</Provider>
			);
		}
	});

