## Array Destructuring

### Sintaxe
#### Atribuição básica de variável
~~~javascript
var foo = ["one", "two"];
var [one, two] = foo;

console.log(one); // "one"
console.log(two); // "two"
~~~

#### Atribuição separada da declaração
~~~javascript
var a, b;
[a, b] = [1, 2];

console.log(a); // 1
console.log(b); // 2
~~~

#### Trocando variáveis
~~~javascript
var a = 1;
var b = 3;
[a, b] = [b, a];

console.log(a); // 3
console.log(b); // 1
~~~

#### Array retornado de uma função
~~~javascript
function f() {
  return [1, 2];
}
var a, b;
[a, b] = f();

console.log(a); // 1
console.log(b); // 2
~~~

#### Ignorando alguns valores retornados
~~~javascript
function f() {
  return [1, 2, 3];
}
var [a, , b] = f();

console.log(a); // 1
console.log(b); // 3
~~~


#### Atribuindo o resto de um array para uma variável
~~~javascript
var [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]
~~~
> Códigos retirados do MDN.

### Exercícios
- [exercício 1](https://github.com/nnnnadia/trybe-exercicios/commit/12047ebf400152cefd5634b70ab348c0fbf01904)
- [exercício 2](https://github.com/nnnnadia/trybe-exercicios/commit/db98db20e0427dce2d715353ea1bf294c1c063af)
- [exercício 3](https://github.com/nnnnadia/trybe-exercicios/commit/1eb5daa1a3815e9c2842fa3c8a00c5ed4b606286)

##

#### [:arrow_left: Object Destructuring](./object-destructuring.md#object-destructuring) | [Default Destructuring :arrow_right:](./default-destructuring.md#default-destructuring)

#### [:date: Voltar para o dia 8.5](../README.md#javascript-es6---spread-operator-parâmetro-rest-destructuring-e-mais)
