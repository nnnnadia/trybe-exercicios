## 7.3: JavaScript ES6 - Fluxos de exceção e Objetos

### 1) [Testes Unitários](Z-conteudo-recursos/testes-unitarios.md#testes-unitários)
  - #### As três dimensões de qualidade
  - #### Testes unitários

### 2) [Testando em Pequenos Passos](Z-conteudo-recursos/testando-em-pequenos-passos.md#testando-em-pequenos-passos)
  - #### TDD: Test Driven Development

### 3) [NodeJS Assert](Z-conteudo-recursos/nodejs-assert.md#nodejs-assert)
  - #### Módulo Assert

### 4) [Introdução ao Jest](Z-conteudo-recursos/introducao-ao-jest.md#introdução-ao-jest)
  - #### Por que usar?
  - #### Instalando o Jest

### 5) [Escrevendo Testes](Z-conteudo-recursos/escrevendo-testes.md#escrevendo-testes)
  - #### Estrutura básica de um teste
  - #### Criando um arquivo de teste separado

### 6) [Expect e Matchers]()

### Definições
Como definido no Course da Trybe:
> "A função expect é utilizada para dar acesso a um conjunto de métodos chamados matchers. (...) Podemos pensar neles como uma ponte que dita qual é a relação entre o resultado que temos e o que queremos."

Uma *expectation* é o objeto retornado pela função expect(), sobre ele será chamado o *matcher*.

### Resumindo

| Tipo de Dado | Matchers | Descrição |
| --- | --- | --- |
| value e typeOf | toBe(value) | testa a igualdade estrita (o famoso === no JavaScript) |
| value | toEqual(value) | objetos porém não podem ser comparados como os tipos primitivos, então é mais apropriado o uso do toEqual() quando comparar valores de arrays e objetos |
| boolean | toBeNull() <br> toBeDefined() <br> toBeUndefined() <br> toBeTruthy() <br> toBeFalsy() <br> | corresponde a apenas `null` <br> corresponde a apenas `undefined` <br> oposto de `toBeUndefined` <br> qualquer coisa que uma instrução `if` trata como verdadeiro <br> qualquer coisa que uma instrução `if` trata como falso |
| numbers | toBeGreaterThan(number) <br> toBeGreaterThanOrEqual(number) <br> toBeLessThan(number) <br> toBeLessThanOrEqual(number) <br> toBe(value) <br> toEqual(value) | `>` <br> `>=` <br> `<` <br> `<=` <br> <br> <br> |
| string | toMatch(regexp \| string) | RegExp: `.toMatch(\exemplo\)` <br> String: `.toMatch('exemplo')` |
| match | data | def |
| match | data | def |
| match | data | def |
| match | data | def |

### 7) Recursos Externos
  - #### Documentações
    - [Node.js/Assert](https://nodejs.org/api/assert.html) [:rewind:](Z-conteudo-recursos/nodejs-assert.md#nodejs-assert)
    - [Jest/Expect](https://jestjs.io/docs/expect)

#### Referências
- [Trybe](https://www.betrybe.com/)

##### [Voltar](https://github.com/nnnnadia/trybe-exercicios#bloco-7-introdu%C3%A7%C3%A3o-%C3%A0-javascript-es6-e-testes-unit%C3%A1rios)
