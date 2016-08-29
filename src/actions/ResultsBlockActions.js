import AppDispatcher from '../dispatcher/AppDispatcher';
import $ from 'jquery';


const ResultsBlockActions = {
  getWeatherFromApi(cityId) {
    $.get('http://api.openweathermap.org/data/2.5/weather?id=' + cityId + '&units=metric&lang=es&APPID=71392650d990b77aecff8933a64cde06')
      .done((data) => AppDispatcher.dispatch({
        actionType: 'RECEIVE_WEATHER',
        forecast: data
      }))
      .fail((error) => alert(error));
  }
};

module.exports = ResultsBlockActions;
