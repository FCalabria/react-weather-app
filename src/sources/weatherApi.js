import $ from 'jquery';
import SearchBlockActions from 'actions/SearchBlockActions';

module.exports = {
    getCities() {
        $.getJSON('sources/city.list.json')
        .done((data) => SearchBlockActions.receiveCities(data))
        .fail((error) => console.error(error));
    }
}