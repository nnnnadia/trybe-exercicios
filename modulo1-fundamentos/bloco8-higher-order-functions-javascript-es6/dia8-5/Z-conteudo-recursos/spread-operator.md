## Spread Operator

### Sintaxe
Permite expandir um objeto iterável, são eles:

#### Arrays literais ou strings
~~~
[...iterableObj, '4', 'five', 6];
~~~

O uso do *spread* também é interessante quando é preciso manter o array original intacto.

~~~javascript
const numbers = [1, 2, 3];
const newArray = [...numbers, 4, 5, 6];

console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers); // [ 1, 2, 3 ]
~~~

#### Chamada de Funções
~~~
myFunction(...iterableObj);
~~~

Para quando o número de argumentos é grande e/ou inconsistente.

~~~javascript
const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5
~~~

#### Objetos literais
~~~
let objClone = { ...obj };
~~~

~~~javascript
const people = {
  id: 101,
  name: 'Alysson',
  age: 25,
};

const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer',
};

const customer = { ...people, ...about };
console.log(customer); /* {
  id: 101,
  name: 'Alysson',
  age: 25,
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer'
} */
~~~
> Códigos retirados do Course da Trybe.

### Exercícios
- [fruitSalad.js](../A-spread-operator/fruitSalad.js)

##

#### [ :arrow_right:](./)

#### [:date: Voltar para o dia 8.5](../README.md#javascript-es6---spread-operator-parâmetro-rest-destructuring-e-mais)
