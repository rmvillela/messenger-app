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