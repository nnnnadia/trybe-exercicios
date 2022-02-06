let n = 13;

// imprime triangulo isósceles
for (let i = 1; i <= n; i += 2) {
  console.log(" ".repeat((n - i) / 2) + "*".repeat(i));
}

// ###*     (n-i)/2 = (7-1)/2 = 3 | i = 1
// ##***    (n-i)/2 = (7-3)/2 = 2 | i = 3
// #*****   (n-i)/2 = (7-5)/2 = 3 | i = 5
// *******  (n-i)/2 = (7-7)/2 = 0 | i = 7