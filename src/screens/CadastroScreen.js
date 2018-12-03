import React from 'react';
import { View, Button, ImageBackground } from 'react-native';
import TextInput from '../components/TextInput';
import { connect } from 'react-redux';

import { modificarNome, modificarEmail, modificarSenha } from '../actions/AutenticacaoActions';

const CadastroScreen = props => (
  <ImageBackground style={{ flex: 1 }} source={require('../images/bg.png')}>
    <View style={{ flex: 1, padding: 10 }}>
      <View style={{ flex: 4, justifyContent: 'center' }}>
        <TextInput value={props.nome} placeholder="Nome" style={{ height: 45, fontSize: 20, borderBottomColor: "#000", borderBottomWidth: 1, color: "#fff" }} onChangeText={texto => props.modificarNome(texto)}/>
        <TextInput value={props.email} placeholder="E-mail" style={{ height: 45, fontSize: 20, borderBottomColor: "#000", borderBottomWidth: 1, color: "#fff" }} onChangeText={texto => props.modificarEmail(texto)}/>
        <TextInput secureTextEntry value={props.senha} placeholder="Senha" style={{ height: 45, fontSize: 20, borderBottomColor: "#000", borderBottomWidth: 1, color: "#fff" }} onChangeText={texto => props.modificarSenha(texto)}/>
      </View>

      <View style={{ flex: 1 }}>
        <Button title="Cadastrar" color="#115e54" onPress={() => console.log('coe')}/>
      </View>
    </View>
  </ImageBackground>
)

const mapStateToProps = state => (
  {
    nome: state.AutenticacaoReducer.nome,
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha
  }
)

export default connect(mapStateToProps, { modificarNome, modificarEmail, modificarSenha})(CadastroScreen)