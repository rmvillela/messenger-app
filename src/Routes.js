import React from 'react';

import CadastroScreen from './screens/CadastroScreen';
import LoginScreen from './screens/LoginScreen';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const AppNavigator = createStackNavigator({
  Home: LoginScreen,
  Cadastro: CadastroScreen
});

export default createAppContainer(AppNavigator);