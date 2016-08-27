import AppDispatcher from '../dispatcher/AppDispatcher';

let SearchBlockActions = {
  receiveCities(citiesArray) {
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_CITIES',
      cities: citiesArray
    })
  },

  searchCity(city) {
    AppDispatcher.dispatch({
      actionType: 'SEARCH_CITY',
      city: city
    });
  }
};

module.exports = SearchBlockActions;
