const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];
function jaContou(objBasket, basketItem) {
  for (let item of objBasket['itens']) {
    if (basketItem === item) {
      return true;
    }
  }
  return false;
}
function contaBasket(objBasket, basket) {
  for (let i = 0; i < basket.length; i += 1) {
    if (!(jaContou(objBasket, basket[i]))) {
      let count = 0;
      for (let fruit of basket) {
        if (basket[i] === fruit) {
          count += 1;
        }
      }
      objBasket[basket[i]] = count;
      objBasket['itens'].push(basket[i]);
    }
  }
  return objBasket;
}
function criaObjBasket(basket) {
  let objBasket = {
    itens: [],
  };
  contaBasket(objBasket, basket);
  return objBasket;
}

function imprimeObjBasket(basket) {
  let objBasket = criaObjBasket(basket);
  console.log('Sua cesta possui:');
  for (let fruit in objBasket) {
    if (fruit !== 'itens') {
      console.log(`${objBasket[fruit]} ${fruit}`);
    }
  }
}
imprimeObjBasket(basket);