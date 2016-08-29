require('normalize.css');
require('styles/App.scss');

import React from 'react';
import MainStore from '../stores/MainStore';
import SearchBlockComponent from './SearchBlockComponent';
import ResultsBlockComponent from './ResultsBlockComponent';

var vm;
class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    vm = this;
    this.state = {
      city: '',
      cityId: ''
    };
  }
  componentDidMount() {
    MainStore.addChangeListener(this.onChange);
  }
  componentWillUnmount() {
    MainStore.removeChangeListener(this.onChange);
  }
  render() {
    return <div className="index">
        <pre>App</pre>
        <SearchBlockComponent city={this.props.city}/>
        <ResultsBlockComponent cityId={this.state.cityId}/>
      </div>;
  }
  onChange() {
    const city = MainStore.getCity();
    vm.setState({
      city: city.name,
      cityId: city._id
    });
  }
}

export default AppComponent;
