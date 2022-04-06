## Array.map()

### Sintaxe
De acordo com a documentação do MDN [:page_facing_up:](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map):point_left:
> ~~~javascript
> arr.map(callback[, thisArg])
> ~~~
> #### Parâmetros
> - `callback`: <br>
> Função cujo retorno produz o elemento do novo Array. Recebe três argumentos: 
> 	- `valorAtual`: <br>
> 	O valor do elemento original do Array de origem. 
> 	- `indice`: <br>
> 	O índice do elemento atual que está sendo processado no array.
> 	- `array`: <br>
> 	O Array de origem.
> - `thisArg` (opcional): <br>
> Valor a ser usado como `this` durante a execução do `callback`.
> #### Valor retornado
> Um novo array com os elementos que passaram no teste.

Utilizando a mesma nomenclatura com arrow function:

~~~javascript
arr.map((element [, index [, array]]) => {
	// o que será executado em cada iteração
});
~~~

##

#### [:arrow_left: Array.filter()](./array-filter.md#arrayfilter) | [Exercícios :arrow_right:](../X-agora-a-pratica/exercicios.md#exercicios)

#### [:date: Voltar para o dia 8.3](../README.md#javascript-es6---higher-order-functions---map-e-filter)
