import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Routes from './src/Routes';
import reducers from './src/reducers'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Routes />
      </Provider>
    );
  }
}