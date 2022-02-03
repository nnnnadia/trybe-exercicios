const primeiroNumero = 3;
const segundoNumero = 2;
let maiorNumero;

if (primeiroNumero > segundoNumero) {
  maiorNumero = primeiroNumero;
} else if (primeiroNumero < segundoNumero) {
  maiorNumero = segundoNumero;
} else {
  maiorNumero = primeiroNumero;
}

console.log(maiorNumero);