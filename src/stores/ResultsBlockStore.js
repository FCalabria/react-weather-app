import AppDispatcher from '../dispatcher/AppDispatcher';
import _ from 'lodash';
let EventEmitter = require('events').EventEmitter;

let forecast;

function setForecast(data) {
  forecast = data;
}

const ResultsBlockStore = _.extend({}, EventEmitter.prototype, {
  getForecast: () => forecast,
  emitChange: () => {
    ResultsBlockStore.emit('change');
  },
   addChangeListener: (callback) => {
    ResultsBlockStore.on('change', callback);
  },
  removeChangeListener: (callback) => {
    ResultsBlockStore.removeListener('change', callback);
  }
});
AppDispatcher.register(function(action) {

  switch(action.actionType) {

    case 'RECEIVE_WEATHER':
      setForecast(action.forecast);
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  ResultsBlockStore.emitChange();

  return true;

});

module.exports = ResultsBlockStore;