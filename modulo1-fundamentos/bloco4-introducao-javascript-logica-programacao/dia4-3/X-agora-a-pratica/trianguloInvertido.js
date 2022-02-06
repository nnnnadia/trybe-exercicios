let n = 13;

// imprime triangulo invertido
for (let i = 1; i <= n; i += 1) {
  console.log(" ".repeat(n - i) + "*".repeat(i));
}

// ####*  n-i = 4 | i = 1
// ###**  n-i = 3 | i = 2
// ##***  n-i = 2 | i = 3
// #****  n-i = 1 | i = 4
// *****  n-i = 0 | i = 5