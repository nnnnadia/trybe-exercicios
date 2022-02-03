const valorCusto = 900;
const valorVenda = 1299;
let valorImposto = 0;
let totalLucroProduto = 0;
let totalLucroMil = 0;

if (valorCusto > valorVenda || valorCusto < 0 || valorVenda < 0) {
  totalLucroMil = "Valor inválido";
} else {
  valorImposto = valorCusto * 0.2;
  totalLucroProduto = valorVenda - valorCusto - valorImposto;
  totalLucroMil = totalLucroProduto * 1000;
}

console.log(totalLucroMil);