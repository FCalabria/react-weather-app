'use strict';

import React from 'react';
import ResultsListComponent from './ResultsListComponent';
import SearchBlockActions from 'actions/SearchBlockActions';
import SearchBlockStore from 'stores/SearchBlockStore';

require('styles/SearchBlock.scss');
var vm;
class SearchBlockComponent extends React.Component {
  constructor(props) {
    super(props);
    vm = this;
    SearchBlockActions.getCities();
    this.state = {
      cityQuery: this.props.city,
      results: []
    };
  }
  componentDidMount() {
    SearchBlockStore.addChangeListener(this.onChange);
  }
  componentWillUnmount() {
    SearchBlockStore.removeChangeListener(this.onChange);
  }
  submitSearch(event) {
    event.preventDefault();
    const city = vm.state.cityQuery.trim();
    if (city.length < 3) return;
    SearchBlockActions.searchCity(city);
  }
  changeCityQuery() {
    vm.setState({ cityQuery: vm.refs.cityQuery.value });
  }
  render() {
    return <div className="searchblock-component">
      <pre>SearchBlock</pre>
      <form onSubmit={this.submitSearch}>
        <pre>Just a normal, boring input &darr; </pre>
        <input name="cityQuery" type="text" placeholder="Buscar ciudad" ref="cityQuery" value={this.state.cityQuery} onChange={this.onChange}/>
      </form>
      <ResultsListComponent results={this.state.results} selectedCity={this.props.city}/>
    </div>;
  }
  onChange() {
    vm.setState({
      results: SearchBlockStore.getSuggestedCities(),
      cityQuery: vm.refs.cityQuery.value
    });
  }
}

SearchBlockComponent.displayName = 'SearchBlockComponent';

// Uncomment properties you need
// SearchBlockComponent.propTypes = {};
SearchBlockComponent.defaultProps = {
  results: []
};

export default SearchBlockComponent;
