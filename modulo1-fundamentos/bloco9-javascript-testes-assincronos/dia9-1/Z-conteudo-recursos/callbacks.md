## Callbacks
### Definição
As callbacks são funções passadas como parâmetro de outra função, entende-se então que a callback será chamada em outro momento durante a execução da função que a recebeu como parâmetro.

Nós já as utilizamos quando adicionamos escutadores aos elementos:
~~~javascript
btn.addEventListener('click', () => {
  ...
});
~~~
O *event listener* começa a ser executado e espera o evento acontecer para então chamar a sua callback, ou seja, são executados de forma assíncrona.

Entretanto, lembre que nem toda callback é assíncrona, nas HOF elas são síncronas, por exemplo.

### Exercícios
- [exercício 1](https://github.com/nnnnadia/trybe-exercicios/pull/69/commits/5c60226b55fb821a6886225783577f36bad2816e?diff=split&w=0)
- [exercício 2](https://github.com/nnnnadia/trybe-exercicios/pull/69/commits/4da20b5a9ddb0a96e5dd20315d8bb78ae512236f?diff=split&w=0)

##

#### [:arrow_left Operações Assíncronas](./operacoes-assincronas.md#operações-assíncronas) | [ :arrow_right:](./)

#### [:date: Voltar para o dia 9.1](../README.md#91-javascript-assíncrono-e-callbacks)
