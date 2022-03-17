## Array.every()

### Sintaxe
De acordo com a documentação do MDN [:page_facing_up:](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every):point_left::
> ~~~javascript
> arr.every(callback[, thisArg]);
> ~~~
> #### Parâmetros
> - `callback`: <br>
> Função que testa cada elemento, recebe três parametros: 
> 	- `currentValue`(obrigatório): <br>
> 	O elemento atual sendo processado na array. 
> 	- `index` (opcional): <br>
> 	O índice do elemento atual sendo processado na array.
> 	- `array` (opcional): <br>
> 	O array de origem.
> - `thisArg` (opcional): <br>
> Valor a ser usado como `this` quando o `callback` é executado.
> #### Valor retornado
> `true` se a função de callback retorna um valor *truthy* para cada um dos elementos do array; caso contrário, `false`.

Utilizando a mesma nomenclatura com arrow function:

~~~javascript
arr.every((element [, index [, array]]) => {
	// o que será executado em cada iteração
});
~~~

### Exercícios
- [verifyAges.js](../D-array-every/verifyAges.js)

#### [:arrow_left: Array.some()](./array-some.md#arraysome) | [Array.sort() :arrow_right:](./array-sort.md#arraysort)

#### [:date: Voltar para o dia 8.2](../README.md#82-javascript-es6---higher-order-functions---foreach-find-some-every-sort)
