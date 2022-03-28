## Setup e Teardown

### 3 Ciclos do Jest
1) Setup: Definições atribuidas antes da execução dos testes.
2) Testes: Momento em que ocorrem os testes.
3) Teardown: Momento em que as atribuições iniciais ou as que ocorreram durante os testes são desfeitas.

### Ferramentas do setup e teardown
#### Setup
- beforeEach(() => {})
- beforeAll(() => {})
#### Teardown
- afterAll(() => {})
- afterEach(() => {})

Para enteder a ordem de execução confira o exemplo da documentação: 
~~~javascript
beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));
test('', () => console.log('1 - test'));
describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('2 - beforeAll'));
  afterAll(() => console.log('2 - afterAll'));
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));
  test('', () => console.log('2 - test'));
});

// 1 - beforeAll
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 2 - beforeAll
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach
// 2 - afterAll
// 1 - afterAll
~~~

##

#### [:arrow_left: Testes Assíncronos com Callbacks](./testes-assincronos-com-callbacks.md#testes-assíncronos-com-callbacks) | [Exercícios :arrow_right:](../X-agora-a-pratica/exercicios.md#exercícios)

#### [:date: Voltar para o dia 9.1](../README.md#91-javascript-assíncrono-e-callbacks)
