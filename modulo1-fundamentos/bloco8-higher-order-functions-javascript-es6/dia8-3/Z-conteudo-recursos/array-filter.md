## Array.filter()

### Sintaxe
De acordo com a documentação do MDN [:page_facing_up:](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter):point_left::
> ~~~javascript
> arr.filter(callback[, thisArg]);
> ~~~
> #### Parâmetros
> - `callback`: <br>
> Função é um predicado, para testar cada elemento do array. Retorna `true` para manter o elemento, `false` caso contrário, recebendo três argumentos:
> 	- `element`: <br>
> 	O elemento que está sendo processado no array.
> 	- `index`: <br>
> 	O índice do elemento atual que está sendo processado no array.
> 	- `array`: <br>
> 	O array para qual `filter` foi chamada.
> - `thisArg` (opcional): <br>
> Valor a ser usado como `this` durante a execução do `callback`.
> #### Valor retornado
> Um novo array com os elementos que passaram no teste.

Utilizando a mesma nomenclatura com arrow function:

~~~javascript
arr.filter((element [, index [, array]]) => {
	// o que será executado em cada iteração
});
~~~

##

#### [Array.map() :arrow_right:](./array-map.md#arraymap)

#### [:date: Voltar para o dia 8.3](../README.md#javascript-es6---higher-order-functions---map-e-filter)
