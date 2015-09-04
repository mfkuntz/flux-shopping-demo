var React = require('react');
var FluxCartApp = require('./components/FluxCartApp.react');
import { Provider } from 'react-redux';

module.exports = React.createClass({
		render: function(){
			return (
				<div>
					<Provider store={this.props.store}>
						{() => <FluxCartApp />}
					</Provider>
				</div>
			);
		}
	});

