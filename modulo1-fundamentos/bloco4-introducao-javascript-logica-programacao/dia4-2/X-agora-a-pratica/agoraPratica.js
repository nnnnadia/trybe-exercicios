// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers = [6, 8, 4, 20, 70, 8, 100, 2, 36, 28];
let sumOfNumbers = 0;
let arithmeticAverage = 0;
let greaterNumber;
let smallerNumber;
let oddNumbers = [];
let orderedNumbers = [];

for (let item of numbers) {
  // imprime cada um dos itens e soma todos em uma única variável
  console.log(item);
  sumOfNumbers += item;

  // confere qual é o maior número e grava qual é em uma variável
  if (greaterNumber === undefined || greaterNumber < item) {
    greaterNumber = item;
  }

  // confere qual é o menor número e grava qual é em uma variável
  if (smallerNumber === undefined || smallerNumber > item) {
    smallerNumber = item;
  }

  // confere quais números da lista são ímpares e coloca-os em uma lista
  if (item % 2 != 0) {
    oddNumbers.push(item);
  }
}
// imprime maior número, menor número, soma de todos os números e lista de números ímpares se houver
console.log(smallerNumber);
console.log(greaterNumber);
console.log(sumOfNumbers);
if (oddNumbers[0] === undefined) {
  console.log("nenhum valor ímpar encontrado");
} else {
  console.log(oddNumbers);
}

// calcula e imprime média aritmética
arithmeticAverage = sumOfNumbers / numbers.length;
console.log(arithmeticAverage);

// confere e imprime se a média aritmética é maior ou não que 20
if (arithmeticAverage > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}

// cria lista de 1 a 25 e usando essa lista imprime a divisão de cada um por 2
for (let i = 1; i <= 25; i += 1) {
  orderedNumbers.push(i);
}
for (let number of orderedNumbers) {
  log(number/2);
}