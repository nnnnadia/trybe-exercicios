## Default Destructuring

### Sintaxe
#### Objetos com valores padrão
~~~javascript
var {a=10, b=5} = {a: 3};

console.log(a); // 3
console.log(b); // 5
~~~

#### Arrays com valores padrão
~~~javascript
var a, b;

[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7
~~~
> Códigos retirados do MDN.

### Exercícios
- [exercício 1](https://github.com/nnnnadia/trybe-exercicios/commit/fb9fe60106cb1a3659b8bd8b72a920bc6e1aa85c)

##

#### [:arrow_left: Array Destructuring](./array-destructuring.md#array-destructuring) | [Object Property Shorthand :arrow_right:](./object-property-shorthand.md#object-property-shorthand)

#### [:date: Voltar para o dia 8.5](../README.md#javascript-es6---spread-operator-parâmetro-rest-destructuring-e-mais)
