// 3 - retornar o índice do nome mais comprido da array
function indiceMaiorNome(nomes){
  let maiorNome = "";
  for (let nome of nomes) {
    if (nome.length > maiorNome.length) {
      maiorNome = nome;
    }
  }
  return nomes.indexOf(maiorNome);
}

console.log(indiceMaiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));