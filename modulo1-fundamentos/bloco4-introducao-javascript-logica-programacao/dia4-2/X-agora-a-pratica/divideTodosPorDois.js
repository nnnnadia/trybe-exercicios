let orderedNumbers = [];

// cria lista de 1 a 25 e usando essa lista imprime a divisão de cada um por 2
for (let i = 1; i <= 25; i += 1) {
  orderedNumbers.push(i);
}
for (let number of orderedNumbers) {
  console.log(number/2);
}