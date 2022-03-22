## Object Property Shorthand

### Definição
Quando uma chave em um objeto é chamado apenas por uma variável é um atalho para criar uma chave com o mesmo nome da variável e o valor da variável.
~~~javascript
const nome = 'Nádia';
const sobrenome = 'Dutra';
const nomeCompleto = {
  nome,
  sobrenome,
};

console.log(nomeCompleto); // { nome: Nádia, sobrenome: Dutra }
~~~

### Exercícios
- [exercício 1](https://github.com/nnnnadia/trybe-exercicios/commit/9ebb1ecf869ec2df516e5af991ea86bf791bb417)

##

#### [:arrow_left: Default Destructuring](./default-destructuring.md#default-destructuring) | [Default Parameters  :arrow_right:](./default-parameters#default-parameters)

#### [:date: Voltar para o dia 8.5](../README.md#javascript-es6---spread-operator-parâmetro-rest-destructuring-e-mais)
