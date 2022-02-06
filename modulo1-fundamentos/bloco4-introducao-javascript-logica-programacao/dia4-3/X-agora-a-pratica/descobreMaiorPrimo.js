const maiorNumeroTestado = 50;

// em ordem 
for (let numeroTestado = maiorNumeroTestado; numeroTestado >= 1; numeroTestado -= 1) {
  let numeroDivisores = 0;
  for (let divisorTestado = numeroTestado; divisorTestado > 0; divisorTestado -= 1) {
    if (numeroTestado % divisorTestado === 0) {
      numeroDivisores += 1;
    }
  }
  if (numeroDivisores === 2) {
    console.log("%d é o maior número primo de 1 a %d.", numeroTestado, maiorNumeroTestado);
    break;
  }
}