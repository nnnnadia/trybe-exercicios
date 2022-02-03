const notaPorcentagem = 65;
let notaLetra;

if (notaPorcentagem > 100 || notaPorcentagem < 0) {
  notaLetra = null;
} else if (notaPorcentagem >= 90) {
  notaLetra = "A";
} else if (notaPorcentagem >= 80) {
  notaLetra = "B";
} else if (notaPorcentagem >= 70) {
  notaLetra = "C";
} else if (notaPorcentagem >= 60) {
  notaLetra = "D";
} else if (notaPorcentagem >= 50) {
  notaLetra = "E";
} else {
  notaLetra = "F";
}

console.log(notaLetra);