'use strict';

import React from 'react';

require('styles//ResultsBlock.scss');


class ResultsBlockComponent extends React.Component {
  render() {
    let forecast = this.props.forecast;
    let classes = '';
    let iconUrl = '';
    if (forecast.weather[0].icon === '') {
      classes += 'hide';
    } else {
      iconUrl = 'http://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';
    }
    return (
      <div className='resultsblock-component'>
        <pre>ResultsBlock</pre>
        <h2 className={classes}>{forecast.name}, {forecast.sys.country}</h2>
        <div className={classes}>
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
      'weather': [
        {
          'description': '',
          'icon': ''
        }
      ],
      'main': {
          'temp': 0,
          'temp_min': 0,
          'temp_max': 0
      },
      'sys': {
          'country': ''
      },
      'name': ''
  }
};

export default ResultsBlockComponent;
