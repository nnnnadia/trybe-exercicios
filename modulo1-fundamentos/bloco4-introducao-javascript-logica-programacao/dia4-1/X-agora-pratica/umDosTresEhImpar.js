const primeiroNumero = 3;
const segundoNumero = 5;
const terceiroNumero = 9;
let algumEImpar;

if (primeiroNumero % 2 !== 0 || segundoNumero % 2 !== 0 || terceiroNumero % 2 !== 0) {
  algumEImpar = true;
} else {
  algumEImpar = false;
}

console.log(algumEImpar);