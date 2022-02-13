// 2 - retornar todos os números pares do vetor.
vetor = [[1, 2], [3,4,5,6], [7,8,9,10]];
function paresNoVetor(vetor) {
  let paresNoVetor = [];
  for (let i = 0; i < vetor.length; i += 1) {
    for (let number of vetor[i]) {
      if (number % 2 === 0) {
        paresNoVetor.push(number);
      }
    }
  }
  return paresNoVetor;
}
console.log(paresNoVetor(vetor));