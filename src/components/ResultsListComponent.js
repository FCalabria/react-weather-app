'use strict';

import React from 'react';

require('styles//ResultsList.scss');

class ResultsListComponent extends React.Component {
  render() {
    let results = this.props.results.map((result: string) => <li><a>{result.name}</a></li>)
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