let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('1º exercício:');
// 1 - imprimir boas-vindas
console.log("Bem-vinda, " + info['personagem']);

console.log('\n2º exercício:');
// 2 - adicionar propriedade e imprimir objeto
info['recorrente'] = 'Sim';
console.log(info);

console.log('\n3º exercício:');
// 3 - mostrar todas as chaves do objeto com for/in
for (let chave in info) {
  console.log(chave);
}

console.log('\n4º exercício:');
// 4 - mostrar todos os valores das chaves do objeto com for/in
for (let chave in info) {
  console.log(info[chave]);
}

console.log('\n5º exercício:');
// 5 - criar outro objeto e imprimir os valores dos dois objetos lado-a-lado.
let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
}

for (let index in info) {
  console.log(info[index] + ' e ' + info2[index]);
}