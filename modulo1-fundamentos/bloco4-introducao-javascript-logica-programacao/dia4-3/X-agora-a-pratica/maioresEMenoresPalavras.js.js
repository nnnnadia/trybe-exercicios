let array = ['java', 'javascript', 'python', 'html', 'css', 'sql'];
// supondo uma lista não vazia
let menorQuantidadeDeCaracteres = array[0].length;
let maiorQuantidadeDeCaracteres = array[0].length;

// descobre quantas letras tem a menor palavra
for (let i = 0; i < array.length; i += 1) {
  if (array[i].length < menorQuantidadeDeCaracteres) {
    menorQuantidadeDeCaracteres = array[i].length;
  }
}
// imprime todas as palavras com a menor quantidade de caracteres
console.log("Menor ou menores palavras:");
for (let word of array) {
  if (word.length === menorQuantidadeDeCaracteres) {
    console.log(word);
  }
}

// para achar a maior palavra é só trocar o sentido do primeiro condicional
for (let i = 0; i < array.length; i += 1) {
  if (array[i].length > maiorQuantidadeDeCaracteres) {
    maiorQuantidadeDeCaracteres = array[i].length;
  }
}
console.log("Maior ou maiores palavras:");
for (let word of array) {
  if (word.length === maiorQuantidadeDeCaracteres) {
    console.log(word);
  }
}