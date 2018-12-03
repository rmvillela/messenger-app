import React from 'react';
import { View, Text, TextInput, Button, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

import { modificarEmail, modificarSenha } from '../actions/AutenticacaoActions';

class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 25 }}>The App</Text>
        </View>
    
        <View style={{ flex: 2 }}>
          <TextInput value={this.props.email} style={{ fontSize: 20, height: 45, borderBottomColor: "#000", borderBottomWidth: 1 }} placeholder="E-mail" onChangeText={texto => this.props.modificarEmail(texto)}/>
          <TextInput value={this.props.senha} style={{ fontSize: 20, height: 45, borderBottomColor: "#000", borderBottomWidth: 1 }} placeholder="Senha" onChangeText={texto => this.props.modificarSenha(texto)}/>
          <TouchableHighlight onPress={ () => this.props.navigation.navigate('Cadastro') }>
            <Text style={{ fontSize: 20 }}>Ainda não tem cadastro? Cadastre-se</Text>
          </TouchableHighlight>
        </View>
    
        <View style={{ flex: 2 }}>
          <Button title="Acessar" color="#115e54" onPress={ () => console.log('eae') } />
        </View>
      </View>
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