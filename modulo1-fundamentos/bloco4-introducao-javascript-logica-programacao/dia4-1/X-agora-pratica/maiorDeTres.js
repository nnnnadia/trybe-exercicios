const primeiroNumero = 1;
const segundoNumero = -8;
const terceiroNumero = 4;
let maiorNumero;

if (primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero) {
  maiorNumero = primeiroNumero;
} else if (segundoNumero > primeiroNumero && segundoNumero > terceiroNumero) {
  maiorNumero = segundoNumero;
} else if (terceiroNumero > primeiroNumero && terceiroNumero > segundoNumero) {
  maiorNumero = terceiroNumero;
} else {
  maiorNumero = segundoNumero;
}

console.log(maiorNumero);