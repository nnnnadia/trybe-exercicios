// ordenar os seguintes números em ordem crescente e decrescente
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// // sequência de indexes comparados (iterações: 45)
// let iteracoes = 0;
// for (let i = 0; i < numbers.length - 1; i += 1) {
//   console.log(i);
//   console.log("Será comparado com :");
//   for (let j = i + 1; j < numbers.length; j += 1) {
//     console.log(j);
//     iteracoes++;
//   }
//   console.log("----");
// }
// console.log(iteracoes);

// encontra o menor número e põe na 1a posição, encontra o segundo menor e põe na 2a posição, ...
for (let i = 0; i < numbers.length - 1; i += 1) {
  for (let j = i + 1; j < numbers.length; j += 1) {
    // // visualizar cada iteração
    // console.log(numbers);
    // console.log("Comparando %d com %d", numbers[i], numbers[j]);
    if (numbers[i] > numbers[j]) {
      let aux = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = aux;
    }
  }
}
console.log(numbers);

// 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 
// 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 
// 2 3 2 3 2 3 2 3 2 3 2 3 2 3 
// 3 4 3 4 3 4 3 4 3 4 3 4 
// 4 5 4 5 4 5 4 5 4 5 
// 5 6 5 6 5 6 5 6 
// 6 7 6 7 6 7 
// 7 8 7 8 
// 8 9

// // sequência de indexes comparados (iterações: 45)
// let iteracoes = 0;
// console.log(numbers.length);
// for (let i = numbers.length - 1; i > 0; i -= 1) {
//   console.log("%d comparações serão feitas", i);
//   for (let j = 0; j < i; j += 1) {
//     console.log("Posições comparadas: " + j + " " + (j + 1));
//     iteracoes++;
//   }
// }
// console.log(iteracoes);

// 

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// 1o for define quantas comparações ainda serão feitas
// são (lista.length - 1) comparações entre pares vizinhos
// encontra do maior pro menor
for (let i = numbers.length - 1; i > 0; i -= 1) {
  for (let j = 0; j < i; j += 1) {
    // // visualizar cada iteração
    // console.log(numbers);
    // console.log("Comparando %d com %d", numbers[j], numbers[j + 1]);
    if (numbers[j] > numbers[j + 1]) {
      let aux = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j+1] = aux;
    }
  }
}
console.log(numbers);

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// para a ordem decrescente trocar o sentido(?) da comparação
// ordena do maior pro menor
for (let i = 0; i < numbers.length - 1; i += 1) {
  for (let j = i + 1; j < numbers.length; j += 1) {
    // // visualizar cada iteração
    // console.log(numbers);
    // console.log("Comparando %d com %d", numbers[i], numbers[j]);
    if (numbers[i] < numbers[j]) {
      let aux = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = aux;
    }
  }
}
console.log(numbers);

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// ordena do menor pro maior
for (let i = numbers.length - 1; i > 0; i -= 1) {
  for (let j = 0; j < i; j += 1) {
    // // visualizar cada iteração
    // console.log(numbers);
    // console.log("Comparando %d com %d", numbers[j], numbers[j + 1]);
    if (numbers[j] < numbers[j + 1]) {
      let aux = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j+1] = aux;
    }
  }
}
console.log(numbers);