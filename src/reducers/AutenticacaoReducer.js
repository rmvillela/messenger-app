const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'modificar_nome':
      return { ...state, nome: action.payload }
      break;

    case 'modificar_email':
      return { ...state, email: action.payload }
      break;
    
    case 'modificar_senha':
      return { ...state, senha: action.payload }
      break;
  
    default:
      break;
  }

  return state;
}