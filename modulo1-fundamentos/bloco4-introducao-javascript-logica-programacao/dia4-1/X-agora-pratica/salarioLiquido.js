const salarioBruto = 3000;
let aliquotaINSS = 0;
let salarioBase = 0;
let contribuicaoINSS = 0;
let alíquotaIR = 0;
let contribuicaoIR = 0;
let salarioLiquido = 0;

if (salarioBruto < 0) {
  console.log("Salário inválido");
} else if (salarioBruto <= 1556.94) {
  contribuicaoINSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  contribuicaoINSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  contribuicaoINSS = salarioBruto * 0.11;
} else {
  contribuicaoINSS = 570.88;
}

salarioBase = salarioBruto - contribuicaoINSS;

if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
  contribuicaoIR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
  contribuicaoIR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
  contribuicaoIR = (salarioBase * 0.225) - 636.13;
} else {
  contribuicaoIR = (salarioBase * 0.275) - 869.36;
}

salarioLiquido = salarioBase - contribuicaoIR;
console.log(salarioLiquido);