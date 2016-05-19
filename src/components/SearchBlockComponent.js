'use strict';

import React from 'react';
import ResultsListComponent from './ResultsListComponent';

require('styles//SearchBlock.scss');

class SearchBlockComponent extends React.Component {
  render() {
    return (
      <div className="searchblock-component">
        <pre>SearchBlock</pre>
        <input placeholder={this.props.city} />
        <ResultsListComponent results={this.props.results} selectedCity={this.props.city}/>
      </div>
    );
  }
}

SearchBlockComponent.displayName = 'SearchBlockComponent';

// Uncomment properties you need
// SearchBlockComponent.propTypes = {};
 SearchBlockComponent.defaultProps = {
   results: [
     {name: 'Barcelona', _id: 'adasdf'},
     {name: 'Madrid', _id: 'adasdf2'},
     {name: 'Londres', _id: 'adasdf3'}
   ]
 };

export default SearchBlockComponent;
