## Parâmetro Rest

### Sintaxe
Como observado pela MDN:
> A sintaxe rest se parece exatamente como a sintaxe de espalhamento, mas esta é usada para desestruturar arrays e objetos. De certa forma, a sintaxe rest é o oposto da sintaxe de espalhamento: A sintaxe de espalhamento (spread) 'expande' um array em vários elementos, enquanto a sintaxe rest coleta multiplos elementos e 'condensa' eles em um único elemento.

~~~javascript
function f(a, b, ...theArgs) {
  // ...
}
~~~

O parâmetro rest permite que a função receba um número indefinido de argumentos. Lembrando que:
- a função só pode ter **um** `...restParam` e
- o parâmetro rest deve ser o último parâmetro da função

~~~javascript
const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88
~~~
> Código retirado do Course da Trybe.

##

#### [:arrow_left: Spread Operator](./spread-operator.md#spread-operator) | [ :arrow_right:](./)

#### [:date: Voltar para o dia 8.5](../README.md#javascript-es6---spread-operator-parâmetro-rest-destructuring-e-mais)
