// 3 - retornar o índice do menor valor da array
function indiceMenorNumero(listaDeNumeros) {
  let menorNumero = Math.min(...listaDeNumeros);
  return listaDeNumeros.indexOf(menorNumero);
}

console.log(indiceMenorNumero([2, 4, 6, 7, 10, 0, -3]));