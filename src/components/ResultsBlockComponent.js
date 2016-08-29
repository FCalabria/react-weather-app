'use strict';

import React from 'react';
import ResultsBlockActions from 'actions/ResultsBlockActions';
import ResultsBlockStore from 'stores/ResultsBlockStore';

require('styles//ResultsBlock.scss');

var vm;
class ResultsBlockComponent extends React.Component {
  constructor(props) {
    super(props);
    vm = this;
    this.state = {
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
  }
  componentDidMount() {
    ResultsBlockStore.addChangeListener(this.onChange);
  }
  componentWillUnmount() {
    ResultsBlockStore.removeChangeListener(this.onChange);
  }
  componentWillReceiveProps(newProps) {
    if (newProps.cityId) {
      ResultsBlockActions.getWeatherFromApi(newProps.cityId);
    }
  }
  render() {
    const forecast = this.state.forecast;
    let classes = '';
    let iconUrl = '';
    if (forecast.weather[0].icon === '') {
      classes += 'hide';
    } else {
      iconUrl = 'http://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';
    }
    return <div className='resultsblock-component'>
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
      </div>;
  }
  onChange() {
    vm.setState({
      forecast: ResultsBlockStore.getForecast()
    });
  }
}

ResultsBlockComponent.displayName = 'ResultsBlockComponent';
ResultsBlockComponent.defaultProps = {
  cityId: ''
};

export default ResultsBlockComponent;
