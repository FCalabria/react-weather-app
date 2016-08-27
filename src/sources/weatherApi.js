import $ from 'jquery';
import WeatherAppActions from 'actions/WeatherAppActions';
import SearchBlockActions from 'actions/SearchBlockActions';

module.exports = {
    getCities() {
        $.getJSON('sources/city.list.json')
        .done((data) => SearchBlockActions.receiveCities(data))
        .fail((error) => console.error(error));
    },

    getWeatherIn(city) {
        $.get('http://api.openweathermap.org/data/2.5/weather?id=' + city._id + '&units=metric&lang=es&APPID=71392650d990b77aecff8933a64cde06')
        .done((data) => WeatherAppActions.receiveWeather(data))
        .fail((error) => console.error(error));
    }
}