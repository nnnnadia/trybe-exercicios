const bolasDeEsporte = ['⚽', '⚾', '🏀', '🏐', '🏀', '⚽'];

let bolaQueEuVouJogar = '';
for (let index = 0; index < bolasDeEsporte.length; index += 1) {
  if (bolasDeEsporte[index] === '🏀') {
    bolaQueEuVouJogar = bolasDeEsporte[index];
    break;
  }
}

let bolaQueEuVouJogar = bolasDeEsporte.find(bola => bola === '🏀');
