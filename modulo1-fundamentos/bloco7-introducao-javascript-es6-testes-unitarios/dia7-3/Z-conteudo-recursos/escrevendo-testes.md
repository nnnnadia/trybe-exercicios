## Escrevendo Testes

### Estrutura básica de um teste

`sum.js`:
~~~javascript
const sum = (a, b) => a + b;

test('sums two values', () => { // o valor entre aspas é o nome do teste
  expect(sum(2, 2)).toEqual(4); // a expectativa de saída de uma função 
}
~~~

### Criando um arquivo de teste separado
O Jest procura por arquivos com a extensão `.js`, `.jsx`, `.ts` ou `.tsx` na pasta `__tests__` ou arquivos com o sufixo `.test` ou `.spec`. Comumente vemos:

`sum.js`:
~~~javascript
const sum = (a, b) => a + b;

module.exports = sum;
~~~
`sum.test.js`:
~~~javascript
const sum = require('./sum');

test('sums two values', () => {
  expect(sum(2, 3)).toBe(5);
});
~~~
> Código retirado do Course da Trybe.

### Exercícios
   - #### [loginValidation.js](../A-escrevendo-testes/loginValidation.js)
   - #### [loginValidation.test.js](../A-escrevendo-testes/loginValidation.test.js)

#### [:arrow_left: Introdução ao Jest :arrow_right:](./introducao-ao-jest.md#introdução-ao-jest) | [ :arrow_right:](.)

#### [:date: Voltar para o dia 7.3](../README.md#73-javascript-es6---fluxos-de-exceção-e-objetos)