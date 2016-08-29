import AppDispatcher from '../dispatcher/AppDispatcher';
import _ from 'lodash';
const EventEmitter = require('events').EventEmitter;
let city = {
  name: '',
  _id: ''
};

function setCity(cityObject) {
  city = _.pick(cityObject, ['name', '_id']);
}

const MainStore = _.extend({}, EventEmitter.prototype, {
  getCity: () => city,
  emitChange: () => {
    MainStore.emit('change');
  },
   addChangeListener: (callback) => {
    MainStore.on('change', callback);
  },
  removeChangeListener: (callback) => {
    MainStore.removeListener('change', callback);
  }
});

AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case 'SET_CITY':
      setCity(action.city);
      break;
    default:
      return true;
  }
  MainStore.emitChange();
  return true;
});

module.exports = MainStore;