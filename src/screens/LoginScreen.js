import React from 'react';
import { View, Text, Button, TouchableHighlight, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

import TextInput from '../components/TextInput';
import { modificarEmail, modificarSenha } from '../actions/AutenticacaoActions';

class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <ImageBackground style={{ flex: 1 }} source={require('../../assets/images/bg.png')}>
        <View style={{ flex: 1, padding: 10 }}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 25, color: "#fff" }}>The App</Text>
          </View>
      
          <View style={{ flex: 2 }}>
            <TextInput value={this.props.email} style={{ fontSize: 20, height: 45, borderBottomColor: "#000", borderBottomWidth: 1, color: "#fff" }} placeholder="E-mail" onChangeText={texto => this.props.modificarEmail(texto)}/>
            <TextInput secureTextEntry value={this.props.senha} style={{ fontSize: 20, height: 45, borderBottomColor: "#000", borderBottomWidth: 1, color: "#fff" }} placeholder="Senha" onChangeText={texto => this.props.modificarSenha(texto)}/>
            <TouchableHighlight onPress={ () => this.props.navigation.navigate('Cadastro') }>
              <Text style={{ fontSize: 20, color: "#fff" }}>Ainda não tem cadastro? Cadastre-se</Text>
            </TouchableHighlight>
          </View>
      
          <View style={{ flex: 2 }}>
            <Button title="Acessar" color="#115e54" onPress={ () => console.log('eae') } />
          </View>
        </View>
      </ImageBackground>
    )
  }
}

mapStateToProps = state => (
  {
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha
  }
)

export default connect(mapStateToProps, { modificarEmail, modificarSenha })(LoginScreen)