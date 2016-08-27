import AppDispatcher from '../dispatcher/AppDispatcher';

let WheaterAppActions = {
  receiveCities(citiesArray) {
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_CITIES',
      cities: citiesArray
    })
  },
  receiveWeather(weather) {
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_WEATHER',
      weather: weather
    })
  },

  getWeather(cityObject) {
    AppDispatcher.dispatch({
      actionType: 'GET_WEATHER',
      city: cityObject
    });
  }
};

module.exports = WheaterAppActions;
