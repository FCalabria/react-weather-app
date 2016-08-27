import AppDispatcher from '../dispatcher/AppDispatcher';
import _ from 'lodash';
let EventEmitter = require('events').EventEmitter;

let fullCitiesList = [];
let suggestedCities = [];

function setCities(citiesArray) {
  fullCitiesList = citiesArray;
}

function searchSuggestedCities(city) {
  city = city.toLowerCase();
  let filtered = _.filter(fullCitiesList, (cityObject) => cityObject.name.toLowerCase().indexOf(city) === 0);
  let outOfWhile = false;
  while (filtered.length < 5 && !outOfWhile) {
    let toPush = _.find(fullCitiesList, (cityObject) => filtered.indexOf(cityObject) === -1 && cityObject.name.toLowerCase().indexOf(city) !== -1);
    toPush !== undefined ? filtered.push(toPush) : outOfWhile = true;
  }
  suggestedCities = filtered;
}

function testFunction(something) {
  console.debug(something);
}


const SearchBlockStore = _.extend({}, EventEmitter.prototype, {
  getSuggestedCities: () => {
    return suggestedCities;
  },

  emitChange: () => {
    SearchBlockStore.emit('change');
  },
   addChangeListener: (callback) => {
    SearchBlockStore.on('change', callback);
  },
  removeChangeListener: (callback) => {
    SearchBlockStore.removeListener('change', callback);
  }
});
// MessageStore.dispatchToken = ChatAppDispatcher.register(function(action) {
AppDispatcher.register(function(action) {

  switch(action.actionType) {

    case 'RECEIVE_CITIES':
      setCities(action.cities);
      break;

    case 'SEARCH_CITY':
      searchSuggestedCities(action.city);
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  SearchBlockStore.emitChange();

  return true;

});

module.exports = SearchBlockStore;