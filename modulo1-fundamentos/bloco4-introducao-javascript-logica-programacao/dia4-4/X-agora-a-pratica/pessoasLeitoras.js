let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log('6º exercício:');
// 6 - acessar nome, sobrenome e titulo
console.log('O livro favorita de ' + leitor['nome'] + ' ' + leitor['sobrenome'] + ' se chama \'' + leitor['livrosFavoritos'][0]['titulo'] +'\'');

// 7 - adicionar valor a uma chave que é uma array
leitor['livrosFavoritos'].push(
{
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
});

console.log('\n8º exercício:');
// 8 - acessar nome e livrosFavoritos
console.log(leitor['nome'] + ' tem ' + leitor['livrosFavoritos'].length + ' livros favoritos.');