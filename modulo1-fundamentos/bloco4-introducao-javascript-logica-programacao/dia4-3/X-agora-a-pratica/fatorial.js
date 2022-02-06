let nFatorial = 10;
let fatorialDeN = 1;

for (let i = 2; i <= nFatorial; i += 1) {
  fatorialDeN *= i;
}

console.log("%d! = %d", nFatorial, fatorialDeN);