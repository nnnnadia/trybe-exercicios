## async/await

### Sintaxe

Quando testamos código assíncrono precisamos ter certeza que a Promise foi executada antes de testarmos, uma forma de garantir que isso aconteça é utilizando o async e await.
~~~javascript
describe('...', () => {
  test('...', async () => {
    const data = await anAsyncFunction();
    await expect(data).toBe('demorei mas cheguei');
  }
});
~~~

Podemos usar em conjunto os matchers `.resolves` e `.rejects` para interagir com o estado da `Promise`.
~~~javascript
test('...', async () => {
  await expect(anAsyncFunction())
    .resolves
    .toBe('demorei mas cheguei');
}
~~~

### Exercícios
- [exercício 1](https://github.com/nnnnadia/9.3-content-async-test/commit/bdaf5534b2f819ca8e4c71579c0a9d2dd4a557ff)

#### [Exercícios :arrow_right:](../X-agora-a-pratica/exercicios.md#exercícios)

#### [:date: Voltar para o dia 9.3](../#93-jest---testes-assíncronos)
