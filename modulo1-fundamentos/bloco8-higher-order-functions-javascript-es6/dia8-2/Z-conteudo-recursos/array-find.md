## Array.find()

### Sintaxe
De acordo com a documentação do MDN [:page_facing_up:](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find):point_left::
> ~~~javascript
> arr.find(callback(element [, index [, array]])[, thisArg]);
> ~~~
> #### Parâmetros
> - `callback`: <br>
> Função executada a cada iteração do array, recebendo três argumentos: 
> 	- `element`: <br>
> 	O elemento atual que está sendo processado no array.
> 	- `index` (opcional): <br>
> 	O índice do elemento atualmente sendo processado no array.
> 	- `array` (opcional): <br>
> 	O array sobre o qual `find` foi chamado.
> - `thisArg` (opcional): <br>
> Objeto usado como `this` quando executando o `callback`.
> #### Valor retornado
> O valor do primeiro elemento do array que satisfaz a função de teste fornecida; caso contrário, `undefined`.

Utilizando a mesma nomenclatura com arrow function:

~~~javascript
arr.find((element [, index [, array]]) => {
	// o que será executado em cada iteração
});
~~~

### Exercícios
- [findDivisibleBy3And5.js](../B-array-find/findDivisibleBy3And5.js)
- [findNameWithFiveLetters.js](../B-array-find/findNameWithFiveLetters.js)
- [findMusic.js](../B-array-find/findMusic.js)

##

#### [:arrow_left: Array.forEach()](./array-foreach.md#arrayforeach) | [Array.some() :arrow_right:](./array-some.md#arraysome)

#### [:date: Voltar para o dia 8.2](../#82-javascript-es6---higher-order-functions---foreach-find-some-every-sort)
