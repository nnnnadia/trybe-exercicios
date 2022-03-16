## Expect e Matchers

### Definições
Como definido no Course da Trybe:
> "A função expect é utilizada para dar acesso a um conjunto de métodos chamados matchers. (...) Podemos pensar neles como uma ponte que dita qual é a relação entre o resultado que temos e o que queremos."

Uma *expectation* é o objeto retornado pela função expect(), sobre ele será chamado o *matcher*.

### Resumindo

Confira mais detalhes [:page_facing_up:](https://jestjs.io/docs/expect):point_left:

| Tipo de Dado | Matchers | Descrição |
| --- | --- | --- |
| value e typeof | toBe(value) | testa a igualdade estrita (o famoso === no JavaScript) |
| value | toEqual(value) | objetos porém não podem ser comparados como os tipos primitivos, então é mais apropriado o uso do toEqual() quando comparar valores de arrays e objetos |
| boolean | toBeNull() <br> toBeDefined() <br> toBeUndefined() <br> toBeTruthy() <br> toBeFalsy() <br> | corresponde a apenas `null` <br> corresponde a apenas `undefined` <br> oposto de `toBeUndefined` <br> qualquer coisa que uma instrução `if` trata como verdadeiro <br> qualquer coisa que uma instrução `if` trata como falso |
| numbers | toBeGreaterThan(number) <br> toBeGreaterThanOrEqual(number) <br> toBeLessThan(number) <br> toBeLessThanOrEqual(number) <br> toBe(value) <br> toEqual(value) | `>` <br> `>=` <br> `<` <br> `<=` <br> <br> <br> |
| string | toMatch(regexp \| string) | RegExp: `.toMatch(\exemplo\)` <br> String: `.toMatch('exemplo')` |
| array | toContain(item) * <br> toContainEqual(item) <br> toHaveLength(number) | verifica se um item está em um array <br> verifica uma estrutura específica e valores está contido em um array <br> verifica a propriedade `.length` do objeto |
| object | .toHaveProperty(keyPath, value?) | verifica se a propriedade fornecida na referência `keyPath` existe para um objeto. `value` é opcional |
| exceptions | toThrow(error?) | testa se a função é capaz de lançar erros |
| negation | not | permite testar o oposto de algo |

\* This matcher also accepts others iterables such as strings, sets, node lists and HTML collections.

#### [:arrow_left: Escrevendo Testes](./escrevendo-testes.md#escrevendo-testes) | [O Bloco Describe :arrow_right:](./o-bloco-describe.md#o-bloco-describe)

#### [:date: Voltar para o dia 7.3](../README.md#73-javascript-es6---fluxos-de-exceção-e-objetos)
