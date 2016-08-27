import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Main';
import weatherApi from 'sources/weatherApi'


// Load initial data
weatherApi.getCities();
// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
