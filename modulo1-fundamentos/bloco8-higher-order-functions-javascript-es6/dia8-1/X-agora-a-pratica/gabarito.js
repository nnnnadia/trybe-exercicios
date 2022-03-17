const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const contaPonto = (resposta, gabarito) => {
  if (resposta === gabarito) {
    return 1;
  } else {
    if (gabarito === 'N.A') {
      return 0;
    }
    return -1;
  }
}

const confereResultado = (respostas, gabarito, callback) => {
  let totalPontos = 0;
  for(let i = 0; i < gabarito.length; i += 1) {
    totalPontos += callback(respostas[i], gabarito[i]);
  }
  return totalPontos;
}

console.log(confereResultado(RIGHT_ANSWERS, STUDENT_ANSWERS, contaPonto));