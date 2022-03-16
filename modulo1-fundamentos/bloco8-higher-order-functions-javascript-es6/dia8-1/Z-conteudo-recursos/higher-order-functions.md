## Higher Order Functions

### Definição

As Higher Order Functions ou HOFs são funções que recebem outras funções como parâmetros e/ou retornam uma função.

Lembre-se que o JavaScript ter a característica de suportar funções como *first-class* é o que permite a existencia das HOFs.

### Estruturando uma HOF

#### Recebendo uma função como parâmetro

~~~javascript
const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

repeat(3, isEven); // Testa quais números serão pares;
repeat(3, isOdd); // Testa quais números serão ímpares;
~~~

*A função recebida como argumento pela HOF também é conhecida por callback. No exemplo, `repeat` é uma HOF que recebe `isEven` ou `isOdd` como callback.*

#### Retornando uma função

~~~javascript
const numberGenerator = () => {
  return Math.random() * 100;
}

console.log(numberGenerator);
~~~
> Códigos retirados do Course da Trybe.