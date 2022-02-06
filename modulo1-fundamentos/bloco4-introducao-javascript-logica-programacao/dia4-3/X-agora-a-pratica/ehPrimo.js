// testa se um número é primo usando boolean
let testaSeEhPrimo = 9;
let temDivisorEntre1ETeste = false;

for (let i = 2; i < testaSeEhPrimo; i += 1) {
  if (testaSeEhPrimo % i === 0) {
    temDivisorEntre1ETeste = true;
    break;
  } 
}
if (temDivisorEntre1ETeste === true) {
  console.log("%d é primo.", testaSeEhPrimo);
} else {
  console.log("%d não é primo", testaSeEhPrimo);
}