## Array.reduce()

### Sintaxe
De acordo com a documentação do MDN [:page_facing_up:](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce):point_left::
> ~~~javascript
> array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial]));
> ~~~
> #### Parâmetros
> - `callback`: <br>
> Função que é executada em cada valor no array (exceto no primeiro, se nenhum `valorInicial` for passado); recebe quatro argumentos:
> - `acumulador`(opcional): <br>
> O índice do elemento atual que está sendo processado no array. Começa a partir do index `0` se um `valorInicial` for fornecido. Do contrário, começa do index `1`.
> - `valorInicial` (opcional): <br>
> Valor a ser usado como o primeiro argumento da primeira chamada da função `callback`. Se nenhum `valorInicial` é fornecido, o primeiro elemento do array será usado como o valor inicial do `acumulador` e o `valorAtual` não será lido. Chamar `reduce()` em uma array vazia sem valor inicial retornará um erro.
> #### Valor retornado
> O valor que resulta da redução.

Utilizando a mesma nomenclatura com arrow function:

~~~javascript
arr.forEach( acumulador, valorAtual[, index[, array]] )[, valorInicial]) => {
	// o que será executado em cada iteração
});
~~~

##

#### [Exercícios :arrow_right:](./exercicios.md#exercicios)

#### [:date: Voltar para o dia 8.4](../README.md#javascript-es6---higher-order-functions---reduce)
