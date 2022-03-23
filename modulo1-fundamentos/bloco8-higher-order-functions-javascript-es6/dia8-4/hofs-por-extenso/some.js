const itensSortidos = ['🎺', '📱', '🪥', '🪴', '🧂', '🧃'];

let temItem;
for (let index = 0; index < itensSortidos.length; index += 1) {
  if (itensSortidos[index] === '🪴') {
    temItem = true;
    break;
  }
}

let temItem = itensSortidos.some(item => item === '🪴');
