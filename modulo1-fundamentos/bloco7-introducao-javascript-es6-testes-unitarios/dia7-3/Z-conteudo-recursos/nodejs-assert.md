## NodeJS Assert

### Módulo Assert

Não é tão robusta quanto o Jest que nós vamos nos aprofundar a seguir, mas como a ferramenta já vem instalada com o NodeJS, vale a pena conferir [:page_facing_up:](https://nodejs.org/api/assert.html):point_left:

O assert é uma expressão booleana que retorna falso quando há um erro

~~~javascript
const assert = require('assert'); // Sintaxe para incluir o módulo assert

assert.strictEqual(50, 50); // Sem erros: 50 === 50
assert.strictEqual(50, 70); // AssertionError: 50 !== 70
~~~
> Código retirado do Course da Trybe.


#### [:arrow_left: Testando em Pequenos Passos](./testando-em-pequenos-passos.md#testando-em-pequenos-passos) | [Introdução ao Jest :arrow_right:](./introducao-ao-jest.md#introdução-ao-jest)

#### [:date: Voltar para o dia 7.3](../README.md#73-javascript-es6---fluxos-de-exceção-e-objetos)
