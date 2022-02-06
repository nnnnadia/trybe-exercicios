let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumOfNumbers = 0;
let arithmeticAverage = 0;

// soma todos os itens
for (let item of numbers) {
  sumOfNumbers += item;
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