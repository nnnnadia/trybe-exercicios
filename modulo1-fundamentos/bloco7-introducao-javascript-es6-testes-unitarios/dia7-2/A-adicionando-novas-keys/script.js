function adicionaParChaveValor(objeto, chave, valor) {
  objeto[chave] = valor;
  console.log(objeto);
}

const copoDAgua = {
  capacidade: '300ml',
  nivel: '60%',
}

adicionaParChaveValor(copoDAgua, 'temperatura', 'gelada');