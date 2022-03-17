## Array.sort()

### Sintaxe
De acordo com a documentação do MDN [:page_facing_up:](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort):point_left::
> ~~~javascript
> arr.sort([funcaoDeComparacao]);
> ~~~
> #### Parâmetros
> - `funcaoDeComparacao`(opcional): <br>
> Especifica uma função que define a ordenação. Se omitido, o array é ordenado de acordo com a pontuação de código Unicode de cada um dos caracteres, de acordo com a conversão de cada elemento para string.
> 	- `primeiroElemento`: <br>
> 	O primeiro elemento para a comparação.
> 	- `segundoElemento`: <br>
> 	O segundo elemento para comparação.
> #### Valor retornado
> O array ordenado. Note que o array é ordenado de acordo com a pontuação de código Unicode de cada um dos caracteres, e nenhuma cópia é feita.

### Exercícios
- [verifyAges.js](../E-array-sort/orderPeople.js)

#### [:arrow_left: Array.every()](./array-every.md#arrayevery)

#### [:date: Voltar para o dia 8.2](../README.md#82-javascript-es6---higher-order-functions---foreach-find-some-every-sort)
