const plantas = ['🌸', '🌹', '🌵', '🌻', '🪴'];

let todasSãoIguais = true;
for (let i = 0; i < plantas.length; i += 1) {
  for (let j = 0; j < plantas.length; j += 1) {
    if (plantas[i] !== plantas[j]) {
      todasSãoIguais = false;
      break;
    }
  }
}

plantas.every(planta => planta === flor);
