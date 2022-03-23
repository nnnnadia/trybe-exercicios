## Array.some()

### Sintaxe
De acordo com a documentação do MDN [:page_facing_up:](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some):point_left:
> ~~~javascript
> arr.some(callback[, thisArg]);
> ~~~
> #### Parâmetros
> - `callback`: <br>
> Função para testar cada elemento, recebendo três argumentos: 
> 	- `currentValue`: <br>
> 	O valor atual do elemento sendo processado no array.
> 	- `index` (opcional): <br>
> 	O índice do elemento atual sendo processado no array.
> 	- `array` (opcional): <br>
> 	O array onde o método `some()` foi chamado.
> - `thisArg` (opcional): <br>
> Valor para usar como `this` durante a execução do `callback`.
> #### Valor retornado
> Esta função retorna `true` se a função callback retornar `true` para qualquer elemento do array; caso contrário, `false`.

Utilizando a mesma nomenclatura com arrow function:

~~~javascript
arr.some((element [, index [, array]]]) => {
	// o que será executado em cada iteração
});
~~~

### Exercícios
- [hasName.js](../C-array-some/hasName.js)

##

#### [:arrow_left: Array.find()](./array-find.md#arrayfind) | [Array.every() :arrow_right:](./array-every.md#arrayevery)

#### [:date: Voltar para o dia 8.2](../README.md#82-javascript-es6---higher-order-functions---foreach-find-some-every-sort)
