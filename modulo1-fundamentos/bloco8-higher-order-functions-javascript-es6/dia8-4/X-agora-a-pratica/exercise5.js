const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(nameArr) {
  return nameArr
    .reduce((acc, name) => acc + name.toLowerCase().split('')
    .reduce((acc, letter) => letter === 'a' ? acc += 1: acc
  , 0), 0);
}
