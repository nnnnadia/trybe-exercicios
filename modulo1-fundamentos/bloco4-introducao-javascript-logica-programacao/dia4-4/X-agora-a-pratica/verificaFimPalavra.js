// 7 - conferir o final da palavra
function verificaFimPalavra(word, ending) {
  if (word.endsWith(ending)) {
    return true;
  }
  return false;
}

console.log(verificaFimPalavra('Trybe', 'be'));