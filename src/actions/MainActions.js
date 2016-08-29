import AppDispatcher from '../dispatcher/AppDispatcher';

let MainActions = {
  setCity(cityObject) {
    AppDispatcher.dispatch({
      actionType: 'SET_CITY',
      city: cityObject
    })
  }
};

module.exports = MainActions;
