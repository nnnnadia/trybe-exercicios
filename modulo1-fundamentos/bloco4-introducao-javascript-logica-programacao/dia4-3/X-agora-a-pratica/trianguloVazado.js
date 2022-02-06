let n = 13;

// imprime triangulo isósceles vazado
for (let i = 1; i <= n; i += 2) {
  if (i === 1 || (i === n) || (i === n - 1)) {
    console.log(" ".repeat((n - i) / 2) + "*".repeat(i));
  } else {
    console.log(" ".repeat((n - i) / 2) + "*" + " ".repeat(i - 2) + "*");
  }
}

// ###*    (n-i)/2 = (7-1)/2 = 3 | i = 1
// ##*#*   (n-i)/2 = (7-3)/2 = 2 | 1 | i-2 = 1 | 1
// #*###*  (n-i)/2 = (7-5)/2 = 1 | 1 | i-2 = 3 | 1
// ******* (n-i)/2 = (7-7)