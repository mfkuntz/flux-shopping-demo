var React = require('react');
var FluxCartApp = require('./components/FluxCartApp.react');
import { Provider } from 'react-redux';


// var App = React.createClass({

// 	// Set the initial component state
// 	getInitialState: function(props){

// 		props = props || this.props;

// 		// Set initial application state using props
// 		return {
// 			store: props.store
// 		};

// 	},

// 	componentWillReceiveProps: function(newProps, oldProps){
// 		this.setState(this.getInitialState(newProps));
// 	},

// 	render: function(){
// 		return (
// 			<div>
// 				<Provider store={this.state.store}>
// 					{() => <FluxCartApp />}
// 				</Provider>
//     		</div>
//     	);
// 	}
// });

module.exports = function (data){
	var immutableData = require('./utils/dataInit')(data);
	var store = require('./stores/createStore')(immutableData);

	return (
			<div>
				<Provider store={store}>
					{() => <FluxCartApp />}
				</Provider>
    		</div>
    	);
}