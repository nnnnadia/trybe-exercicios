## Async e Await

### Sintaxe

> ~~~javascript
> async function [nome]([parametro1[, ..., parametroN]]) {
>   ...
>   [rv] = await expressão;
> }
> ~~~

Quando uma função assíncrona é chamada ela retorna uma *Promise*. Se junto com essa *Promise* é retornado um valor ela é resolvida, já se o retorno é o lançamento de uma exceção ela é rejeitada.
Uma função assíncrona pode conter uma expressão await, que pausa a execução da função assíncrona e espera pela resolução da Promise passada, e depois retoma a execução da função assíncrona e retorna o valor resolvido ou invoca uma Exception com o valor rejeitado.

#### [:arrow_left: Promises](./promises.md#promises) | [Para Fixar :arrow_right:](./para-fixar.md#para-fixar)

#### [:date: Voltar para o dia 9.2](../#92-javascript-assíncrono---fetch-api-e-asyncawait)
