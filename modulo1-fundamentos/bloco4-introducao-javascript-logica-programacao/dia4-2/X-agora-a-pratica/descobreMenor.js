let numbers = [6, 8, 4, 20, 70, 8, 100, 2, 36, 28];
let smallerNumber;

// confere qual é o menor número e grava qual é em uma variável
for (let item of numbers) {
  if (smallerNumber === undefined || smallerNumber > item) {
    smallerNumber = item;
  }
}

console.log(smallerNumber);