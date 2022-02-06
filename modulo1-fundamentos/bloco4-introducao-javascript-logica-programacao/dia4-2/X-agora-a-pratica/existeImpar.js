let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNumbers = [];

// confere quais números da lista são ímpares e coloca-os em uma lista
for (let item of numbers) {
  if (item % 2 != 0) {
    oddNumbers.push(item);
  }
}

// imprile lista de números ímpares se houver
if (oddNumbers[0] === undefined) {
  console.log("nenhum valor ímpar encontrado");
} else {
  console.log(oddNumbers);
}