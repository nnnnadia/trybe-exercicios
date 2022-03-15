## 7.3: JavaScript ES6 - Fluxos de exceção e Objetos

### As três dimensões de qualidade
- Confiança: Resistência a falhas, um programa que não quebra com qualquer erro.
- Funcionalidade: O programa entrega o que é proposto.
- Performance: Bom rendimento e desempenho quando volume de processamento é alto.

### Testes unitários

> Como definido no Course da Trybe:
> "(...) entende-se como **unidade funcional** qualquer porção de código que, através de algum estímulo, seja capaz de gerar um comportamento esperado."

Um teste unitário age sobre uma unidade funcional. O objetivo é prever e então prevenir possíveis erros que podem ser causadas por alterações do que é *esperado*.

### TDD: Test Driven Development

![Diagrama do TDD](Z-conteudo-recursos/diagramatdd.png)
> Ciclo TDD - inspirado no artigo de Kent Dodds - imagem retirada do Course da Trybe

1) Teste falha: escreva um teste para cobrir uma futura função - este teste irá falhar.
2) Teste passa: Implementar uma função que faça o necessário para passar no teste criado.
3) Refatorar: Melhorar o código de forma que ele não volte a não passar no teste.
4) Repeat.

### NodeJS Assert

Não é tão robusta quanto o Jest que nós vamos nos aprofundar a seguir, mas como a ferramenta que já vem instalada com o NodeJS, vale a pena conferir [:page_facing_up:](#documentações):point_left:

O assert é uma expressão booleana que retorna falso quando há um erro

<pre><code>const assert = require('assert'); // Sintaxe para incluir o módulo assert

assert.strictEqual(50, 50); // Sem erros: 50 === 50
assert.strictEqual(50, 70); // AssertionError: 50 !== 70</code></pre>
> Código retirado do Course da Trybe

### Jest

A grande vantagem do Jest é que ele não interrompe a execução quando um teste falha.

Mesmo com os testes anteriores não passando é possível continuar trabalhando em novos testes e você tem conhecimento se alguma nova implementação causa falhas em outras áreas do código.

Com outras ferramentas seria preciso editar o código comentando ou removendo testes para pular.
- O Jest não requer instalação.
- Se integra muito bem com o React, que já vem com o Jest instalado.

### Recursos Externos

#### Documentações
- [Node.js/Assert](https://nodejs.org/api/assert.html) [:arrow_double_up:](#nodejs-assert)

#### Referências
- [Trybe](https://www.betrybe.com/)

##### [Voltar](https://github.com/nnnnadia/trybe-exercicios#bloco-7-introdu%C3%A7%C3%A3o-%C3%A0-javascript-es6-e-testes-unit%C3%A1rios)
