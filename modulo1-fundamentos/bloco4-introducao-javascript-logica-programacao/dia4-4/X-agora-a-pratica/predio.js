let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

// 4 - Acesse as chaves nome , sobrenome , andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: "O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101".
let nome = moradores.blocoDois[1].nome;
let sobrenome = moradores.blocoDois[1].sobrenome;
let andar = moradores.blocoDois[1].andar;
let apartamento = moradores.blocoDois[1].apartamento;
console.log(`O morador do bloco 2 de nome ${nome} ${sobrenome} mora no ${andar}º andar, apartamento ${apartamento}.`);

// 5 - Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome , depois faça o mesmo para os moradores do bloco 2.
for (let bloco in moradores) {
  for (let morador of moradores[bloco]) {
    console.log(`${morador.nome} ${morador.sobrenome}`);
  }
}