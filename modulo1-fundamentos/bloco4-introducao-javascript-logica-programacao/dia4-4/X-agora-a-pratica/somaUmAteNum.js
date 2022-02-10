// 6 - receber um número N e somar todos os números de 1 a N
function somaUmAteNum (num) {
  let acumulador = 0;
  for (let i = 1; i <= num; i += 1) {
    acumulador += i;
  }
  return acumulador;
}

console.log(somaUmAteNum(3));