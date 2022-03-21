let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

[,,, ...numerosPares] = numerosPares;
console.log(numerosPares);
// solução possível com o enunciado, mas só seria possível de gerar quando se sabe onde e quantos elementos ignorar.
