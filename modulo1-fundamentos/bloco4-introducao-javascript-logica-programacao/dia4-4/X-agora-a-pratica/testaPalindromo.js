// 1 - verificar se uma palavra é um palíndromo
function testaPalindromo(palavra) {
  let arvalap = palavra.split('').reverse().join('');
  let ehPalindromo = false;
  if (palavra === arvalap) {
    ehPalindromo = true;
  }
  return ehPalindromo;
}

console.log(testaPalindromo('arara'));