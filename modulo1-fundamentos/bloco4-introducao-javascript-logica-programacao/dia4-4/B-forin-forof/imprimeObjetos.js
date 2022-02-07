// 1 - imprime valores das chaves
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let index in names) {
  console.log(names[index]);
}

// 2 - imprime nome das chaves e seus valores
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let index in car) {
  console.log(index, car[index]);
}