import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';

const CadastroScreen = props => (
  <View style={{ flex: 1, padding: 10 }}>
    <View style={{ flex: 4, justifyContent: 'center' }}>
      <TextInput value={props.nome} placeholder="Nome" style={{ height: 45, fontSize: 20, borderBottomColor: "#000", borderBottomWidth: 1 }} />
      <TextInput value={props.email} placeholder="E-mail" style={{ height: 45, fontSize: 20, borderBottomColor: "#000", borderBottomWidth: 1 }} />
      <TextInput value={props.senha} placeholder="Senha" style={{ height: 45, fontSize: 20, borderBottomColor: "#000", borderBottomWidth: 1 }} />
    </View>

    <View style={{ flex: 1 }}>
      <Button title="Cadastrar" color="#115e54" onPress={() => console.log('coe')}/>
    </View>
  </View>
)

const mapStateToProps = state => (
  {
    nome: state.AutenticacaoReducer.nome,
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha
  }
)

export default connect(mapStateToProps, null)(CadastroScreen)