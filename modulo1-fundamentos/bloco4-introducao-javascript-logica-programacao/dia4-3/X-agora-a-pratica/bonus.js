let n = 17;

// imprime quadrado
for (let i = 1; i <= n; i += 1) {
  console.log("*".repeat(n));
}

// imprime triangulo
for (let i = 1; i <= n; i += 1) {
  console.log("*".repeat(i));
}

// imprime triangulo invertido
for (let i = 1; i <= n; i += 1) {
  console.log(" ".repeat(n - i) + "*".repeat(i));
}

// imprime triangulo isósceles
for (let i = 1; i <= n; i += 2) {
  console.log(" ".repeat((n - i) / 2) + "*".repeat(i));
}

// imprime triangulo isósceles vazado
for (let i = 1; i <= n; i += 2) {
  if (i === 1 || (i === n) || (i === n - 1)) {
    console.log(" ".repeat((n - i) / 2) + "*".repeat(i));
  } else {
    console.log(" ".repeat((n - i) / 2) + "*" + " ".repeat(i - 2) + "*");
  }
}

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
