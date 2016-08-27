require('normalize.css');
require('styles/App.scss');

import React from 'react';
import WeatherAppStore from '../stores/WeatherAppStore';
import SearchBlockComponent from './SearchBlockComponent';
import ResultsBlockComponent from './ResultsBlockComponent';


class AppComponent extends React.Component {
  componentDidMount() {
    WeatherAppStore.addChangeListener(this.onChange);
  };
  componentWillUnmount() {
    WeatherAppStore.removeChangeListener(this.onChange);
  }
  render() {
    return (
      <div className="index">
        <pre>App</pre>
        <SearchBlockComponent city={this.props.city}/>
        <ResultsBlockComponent city={this.props.city}/>
      </div>
    );
  }
  onChange() {
    console.log('change main app');
    const city = WeatherAppStore.getCity();
    this.setState({
      city: city.name,
      cityId: city._id
    });
  }
}

// AppComponent.defaultProps = {
//   city: '',
//   cityId: ''
// };

export default AppComponent;
