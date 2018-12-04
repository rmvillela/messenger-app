import React, { Component } from 'react';
import { View, Button, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

import { modificarNome, modificarEmail, modificarSenha, cadastrarUsuario } from '../actions/AutenticacaoActions';
import TextInput from '../components/TextInput';

class CadastroScreen extends React.Component {
  _cadastrarUsuario() {
    const { nome, email, senha } = this.props; // Desestruturação

    // O código acima equivale a:
    // const nome = this.props.nome;
    // const email = this.props.email;
    // const senha = this.props.senha;

    this.props.cadastrarUsuario({ nome, email, senha });
  }

  render() {
    return (
      <ImageBackground style={{ flex: 1 }} source={require('../assets/images/bg.png')}>
        <View style={{ flex: 1, padding: 10 }}>
          <View style={{ flex: 4, justifyContent: 'center' }}>
            <TextInput 
              value={this.props.nome} 
              placeholder="Nome" 
              style={{ 
                height: 45, 
                fontSize: 20, 
                borderBottomColor: "#000", 
                borderBottomWidth: 1, 
                color: "#fff" 
              }} 
              onChangeText={texto => this.props.modificarNome(texto)}
            />

            <TextInput 
              value={this.props.email}
              placeholder="E-mail"
              style={{ height: 45, 
                fontSize: 20, 
                borderBottomColor: "#000", 
                borderBottomWidth: 1, 
                color: "#fff" 
              }} 
              onChangeText={texto => this.props.modificarEmail(texto)}
            />

            <TextInput 
              secureTextEntry 
              value={this.props.senha} 
              placeholder="Senha" 
              style={{ 
                height: 45, 
                fontSize: 20, 
                borderBottomColor: "#000", 
                borderBottomWidth: 1, 
                color: "#fff" 
              }} 
              onChangeText={texto => this.props.modificarSenha(texto)}
            />
          </View>
    
          <View style={{ flex: 1 }}>
            <Button 
              title="Cadastrar" 
              color="#115e54" 
              onPress={() => this._cadastrarUsuario()}
            />
          </View>
        </View>
      </ImageBackground>
    )
  }
} 

const mapStateToProps = state => (
  {
    nome: state.AutenticacaoReducer.nome,
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha
  }
)

export default connect(mapStateToProps, { modificarNome, modificarEmail, modificarSenha, cadastrarUsuario })(CadastroScreen)