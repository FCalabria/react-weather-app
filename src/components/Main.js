require('normalize.css');
require('styles/App.css');

import React from 'react';
import SearchBlockComponent from './SearchBlockComponent';
import ResultsBlockComponent from './ResultsBlockComponent';


class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <pre>App</pre>
        <SearchBlockComponent city={this.props.city}/>
        <ResultsBlockComponent city={this.props.city}/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
  city: 'Barcelona',
  cityId: ''
};

export default AppComponent;
