import $ from 'jquery';
import AppDispatcher from '../dispatcher/AppDispatcher';

const SearchBlockActions = {
  getCities() {
    $.getJSON('sources/city.list.json')
      .done((data) => AppDispatcher.dispatch({
        actionType: 'RECEIVE_CITIES',
        cities: data
      }))
      .fail((error) => alert(error));
  },

  searchCity(city) {
    AppDispatcher.dispatch({
      actionType: 'SEARCH_CITY',
      city: city
    });
  }
};

module.exports = SearchBlockActions;
