const confereNumeros = (numero1, numero2) => {
  if (numero1 === numero2) {
    return true;
  }
  return false;
}

const resultadoSorteio = (numeroApostado, callback) => {
  const numeroSorteado = Math.floor(Math.random() *  5 + 1);
  if (callback(numeroApostado, numeroSorteado)) {
    return 'Parabéns você ganhou';
  }
  return 'Tente novamente';
}

console.log(resultadoSorteio(2, confereNumeros));