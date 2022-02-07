// 1 - operações aritméticas
function adicionaDoisNumeros(primeiroNumero, segundoNumero) {
  var resultadoOperacao = 0;
  resultadoOperacao = primeiroNumero + segundoNumero;
  return resultadoOperacao;
}

function subtraiDoisNumeros(primeiroNumero, segundoNumero) {
  var resultadoOperacao = 0;
  resultadoOperacao = primeiroNumero - segundoNumero;
  return resultadoOperacao;
}

function multiplicaDoisNumeros(primeiroNumero, segundoNumero) {
  var resultadoOperacao = 0;
  resultadoOperacao = primeiroNumero * segundoNumero;
  return resultadoOperacao;
}

function divideDoisNumeros(primeiroNumero, segundoNumero) {
  var resultadoOperacao = 0;
  resultadoOperacao = primeiroNumero / segundoNumero;
  return resultadoOperacao;
}

function moduloDoisNumeros(primeiroNumero, segundoNumero) {
  var resultadoOperacao = 0;
  resultadoOperacao = primeiroNumero % segundoNumero;
  return resultadoOperacao;
}

console.log(adicionaDoisNumeros(2,1));
console.log(subtraiDoisNumeros(2,1));
console.log(multiplicaDoisNumeros(2,1));
console.log(divideDoisNumeros(2,1));
console.log(moduloDoisNumeros(2,1));

// 2 - compara dois números
function maiorDeDois(primeiroNumero, segundoNumero) {
  let maiorNumero;
  if (primeiroNumero > segundoNumero) {
    maiorNumero = primeiroNumero;
  } else if (primeiroNumero < segundoNumero) {
    maiorNumero = segundoNumero;
  } else {
    maiorNumero = primeiroNumero;
  }
  return maiorNumero;
}

console.log(maiorDeDois(3, 3));

// 3 - compara três números
function maiorDeTres(primeiroNumero, segundoNumero, terceiroNumero) {
  let maiorNumero;
  if (primeiroNumero >= segundoNumero && primeiroNumero >= terceiroNumero) {
    maiorNumero = primeiroNumero;
  } else if (segundoNumero >= primeiroNumero && segundoNumero >= terceiroNumero) {
    maiorNumero = segundoNumero;
  } else if (terceiroNumero >= primeiroNumero && terceiroNumero >= segundoNumero) {
    maiorNumero = terceiroNumero;
  }
  return maiorNumero;
}

console.log(maiorDeTres(1, 3, 4));

// 4 - confere se o número é positivo ou negativo ou zero
function positivoOuNegativo(numeroTestado) {
  let valorDoSinal;
  if (numeroTestado > 0) {
    valorDoSinal = "positive";
  } else if (numeroTestado < 0) {
    valorDoSinal = "negative";
  } else if (numeroTestado == 0) {
    valorDoSinal = "zero";
  }
  return valorDoSinal;
}

console.log(positivoOuNegativo(0));

// 5 - confere se são possíveis ângulos de um triângulo
function eTriangulo(primeiroAngulo, segundoAngulo, terceiroAngulo) {
  let possivelTriangulo;
  if (primeiroAngulo <= 0 || segundoAngulo <= 0 || terceiroAngulo <= 0 || typeof primeiroAngulo == "string" || typeof segundoAngulo == "string" || typeof terceiroAngulo == "string") {
    possivelTriangulo = null;
  } else if ((primeiroAngulo + segundoAngulo + terceiroAngulo) === 180) {
    possivelTriangulo = true;
  } else {
    possivelTriangulo = false;
  }
  return possivelTriangulo;
}

console.log(eTriangulo(90, 45, 44));