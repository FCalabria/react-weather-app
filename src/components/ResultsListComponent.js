'use strict';

import React from 'react';
import MainActions from 'actions/MainActions';

require('styles//ResultsList.scss');

class ResultsListComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  selectCity(cityObject) {
    MainActions.setCity(cityObject);
  }
  render() {
    let results = this.props.results.map((result) =>
      <li key={result._id}>
        <a onClick={this.selectCity.bind(this, result)}>{result.name}, {result.country}</a>
      </li>
    )
    return (
      <div className="resultslist-component">
        <pre>ResultsList</pre>
        <ul>
          {results}
        </ul>
      </div>
    );
  }
}

ResultsListComponent.displayName = 'ResultsListComponent';

// Uncomment properties you need
// ResultsListComponent.propTypes = {};
// ResultsListComponent.defaultProps = {};

export default ResultsListComponent;
