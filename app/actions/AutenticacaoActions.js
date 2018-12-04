import firebase from 'firebase';

export const modificarNome = (texto) => {
  return {
    type: 'modificar_nome',
    payload: texto
  }
}

export const modificarEmail = (texto) => {
  return {
    type: 'modificar_email',
    payload: texto
  }
}

export const modificarSenha = (texto) => {
  return {
    type: 'modificar_senha',
    payload: texto
  }
}

export const cadastrarUsuario = ({ nome, email, senha}) => {
  firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then(user => console.log(user))
    .catch(error => console.log(error));

  return {
    type: 'cadastrar_usuario'
  }
}