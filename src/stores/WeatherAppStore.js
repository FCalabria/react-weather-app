import AppDispatcher from '../dispatcher/AppDispatcher';
import _ from 'lodash';
let EventEmitter = require('events').EventEmitter;

function setWeather(weatherObject) {
  weather = weatherObject;
}

function testFunction(something) {
  console.debug(something);
}


const WeatherAppStore = _.extend({}, EventEmitter.prototype, {
  emitChange: () => {
    console.log('emit change');
    WeatherAppStore.emit('change');
  },
   addChangeListener: (callback) => {
    WeatherAppStore.on('change', callback);
  },
  removeChangeListener: (callback) => {
    WeatherAppStore.removeListener('change', callback);
  }
});
// MessageStore.dispatchToken = ChatAppDispatcher.register(function(action) {
AppDispatcher.register(function(action) {

  switch(action.actionType) {

    case 'RECEIVE_WEATHER':
      setWeather(action.weather);
      break;

    case 'GET_WEATHER':
      testFunction(action);
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  WeatherAppStore.emitChange();

  return true;

});

module.exports = WeatherAppStore;