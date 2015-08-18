var dispatcher =  require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var fluxCartConstants = require('../constants/FluxCartConstants');
var _ = require('underscore');

var _product = {}, _selected = null;

function loadProductData(data){
	_product = data[0];
	_selected = data[0].variants[0];
};

function setSelected(index){
	_selected = _product.variants[index];
};

var productStore = _.extend({}, EventEmitter.prototype,{
	// Return Product data
  getProduct: function() {
    return _product;
  },

  // Return selected Product
  getSelected: function(){
    return _selected;
  },

  // Emit Change event
  emitChange: function() {
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});

dispatcher.register(function(payload){
	var action = payload.action;
	var text;

	switch(action.actionType){
		case fluxCartConstants.RECEIVE_DATA:
			loadProductData(action.data);
			break;
		case fluxCartConstants.SELECT_PRODUCT:
			setSelected(action.data);
			break;

		default:
			return true;
	}
	//we did something!
	productStore.emitChange();
	return true;
});

module.exports = productStore;