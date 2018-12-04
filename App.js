import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import Routes from './app/Routes';
import reducers from './app/reducers'

export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyD4MUmsKX2xiHsySaLpYiYk3xKEGR0RBw8",
      authDomain: "messenger-app-a7014.firebaseapp.com",
      databaseURL: "https://messenger-app-a7014.firebaseio.com",
      projectId: "messenger-app-a7014",
      storageBucket: "messenger-app-a7014.appspot.com",
      messagingSenderId: "812208920417"
    });
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Routes />
      </Provider>
    );
  }
}