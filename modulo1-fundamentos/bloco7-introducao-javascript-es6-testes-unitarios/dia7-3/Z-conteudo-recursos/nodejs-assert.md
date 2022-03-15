## NodeJS Assert

### Módulo Assert

Não é tão robusta quanto o Jest que nós vamos nos aprofundar a seguir, mas como a ferramenta já vem instalada com o NodeJS, vale a pena conferir [:page_facing_up:](../README.md#documentações):point_left:

O assert é uma expressão booleana que retorna falso quando há um erro

~~~javascript
const assert = require('assert'); // Sintaxe para incluir o módulo assert

assert.strictEqual(50, 50); // Sem erros: 50 === 50
assert.strictEqual(50, 70); // AssertionError: 50 !== 70
~~~
> Código retirado do Course da Trybe.