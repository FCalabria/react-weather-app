'use strict';

import React from 'react';

require('styles//ResultsBlock.scss');


class ResultsBlockComponent extends React.Component {
  render() {
    let forecast = this.props.forecast;
    let iconUrl = 'http://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';
    return (
      <div className='resultsblock-component'>
        <pre>ResultsBlock</pre>
        <h2>{forecast.name}, {forecast.sys.country}</h2>
        <div>
          <img src={iconUrl}/>
          <p>{forecast.weather[0].description}</p>
          <div>
            <p>Temp actual: {forecast.main.temp}ºC</p>
            <p>Max/min: {forecast.main.temp_max}/{forecast.main.temp_min}</p>
          </div>
        </div>
      </div>
    );
  }
}

ResultsBlockComponent.displayName = 'ResultsBlockComponent';

// Uncomment properties you need
// ResultsBlockComponent.propTypes = {};
ResultsBlockComponent.defaultProps = {
  forecast: {
      'coord': {
          'lon': 145.77,
          'lat': -16.92
      },
      'weather': [
          {
              'id': 521,
              'main': 'Rain',
              'description': 'chubasco',
              'icon': '09n'
          }
      ],
      'base': 'cmc stations',
      'main': {
          'temp': 23.09,
          'pressure': 1013,
          'humidity': 78,
          'temp_min': 18.89,
          'temp_max': 25
      },
      'wind': {
          'speed': 5.7,
          'deg': 160
      },
      'clouds': {
          'all': 75
      },
      'dt': 1463692508,
      'sys': {
          'type': 1,
          'id': 8166,
          'message': 0.0031,
          'country': 'AU',
          'sunrise': 1463603706,
          'sunset': 1463644300
      },
      'id': 2172797,
      'name': 'Cairns',
      'cod': 200
  }
};

export default ResultsBlockComponent;
