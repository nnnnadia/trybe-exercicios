// 5 - descobrir moda da lista
function permanece(item, conjunto) {
  for (let numero of conjunto) {
    if (item === numero) {
      return true;
    }
  }
}

function moda(listaDeNumeros) {
  let listaDeNumerosSemRepeticao = [];
  let maiorFrequencia = 0;
  let modaDaLista = 0;
  for (let i = 0; i < listaDeNumeros.length; i += 1) {
    if (!(permanece(listaDeNumeros[i], listaDeNumerosSemRepeticao))) {  // confere se o numero já foi contado
      let contaFrequencia = 0;
      for (let j = 0; j < listaDeNumeros.length; j += 1) {
        if (listaDeNumeros[i] === listaDeNumeros[j]) {
          contaFrequencia += 1;
        }
      }
      if (contaFrequencia > maiorFrequencia) {
        maiorFrequencia = contaFrequencia;
        modaDaLista = listaDeNumeros[i];
      }
      listaDeNumerosSemRepeticao.push(listaDeNumeros[i]);
    }
  }
  return modaDaLista;
}

console.log(moda([2, 3, 2, 5, 8, 2, 3]));