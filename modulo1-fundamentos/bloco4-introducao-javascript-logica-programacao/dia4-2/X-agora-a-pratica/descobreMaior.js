let numbers = [6, 8, 4, 20, 70, 8, 100, 2, 36, 28];
let greaterNumber;

// confere qual é o maior número e grava qual é em uma variável
for (let item of numbers) {
  if (greaterNumber === undefined || greaterNumber < item) {
    greaterNumber = item;
  }
}

console.log(greaterNumber);