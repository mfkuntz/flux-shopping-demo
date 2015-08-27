var React = require('react');
var FluxCartApp = require('./components/FluxCartApp.react');
import { Provider } from 'react-redux';

module.exports = function(store){

	return React.createClass({
		getInitialState: function(props){
			return {
				store: store
			};

		},
		render: function(){
			return (
				<div>
					<Provider store={this.state.store}>
						{() => <FluxCartApp />}
					</Provider>
				</div>
			);
		}
	});

}