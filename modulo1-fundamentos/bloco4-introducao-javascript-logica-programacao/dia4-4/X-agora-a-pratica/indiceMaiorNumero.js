// 2 - retornar o índice do maior valor da array
function indiceMaiorNumero(listaDeNumeros) {
  let maiorNumero = Math.max(...listaDeNumeros);
  return listaDeNumeros.indexOf(maiorNumero);
}

console.log(indiceMaiorNumero([2, 3, 6, 7, 10, 1]));