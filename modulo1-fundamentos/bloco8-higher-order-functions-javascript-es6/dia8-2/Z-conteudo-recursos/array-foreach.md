### Sintaxe
De acordo com a documentação do MDN [:page_facing_up:](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach):point_left::
> ~~~javascript
> arr.forEach(callback(currentValue [, index [, array]])[, thisArg]);
> ~~~
> #### Parâmetros
> - `callback`: <br>
> Função para executar em cada elemento, recebendo três argumentos: 
> 	- `currentValue`: <br>
> 	O valor atual do elemento sendo processado no array.
> 	- `index` (opcional): <br>
> 	O índice do elemento atual sendo processado no array.
> 	- `array` (opcional): <br>
> 	O array que `forEach()` está sendo aplicado.
> - `thisArg` (opcional): <br>
> Valor a ser usado como `this` quando executar `callback`.
> #### Valor retornado
> `undefined`.

Utilizando a mesma nomenclatura com arrow function:

~~~javascript
arr.forEach((currentValue [, index [, array]]) => {
	// o que será executado em cada iteração
});
~~~

### Exercícios
 - [sendEmails.js](A-array-foreach/sendEmails.js)


[ :arrow_right:]()

#### [:date: Voltar para o dia 8.2](../README.md#82-javascript-es6---higher-order-functions---foreach-find-some-every-sort)
