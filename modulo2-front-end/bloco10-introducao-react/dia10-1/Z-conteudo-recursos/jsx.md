## JSX

### Javascript Syntax Extension
Ou extensção de sintaxe para JavaScript nos permite utilizar markup no JS, facilitando a visualização da UI, ao mesmo é possível encapsular lógica nos oferecendo a simplicidade do HTML e o poder do JS.
Ao invés de separar markup e lógica em arquivos distintos React separa por interesse (*concern*) em componentes que possuem ambos.

#### Encapsulando expressões
Dentro das chaves podemos inserir qualquer expressão válida em JavaScript, além disso JSX também se comporta como expressão podendo ser atribuída a variáveis, aceita como argumento e retornada de uma função.
~~~javascript
const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;  
  }
  return <h1>Hello, Stranger.</h1>;
}

const element = getGreeting(user);
~~~
#### Especificando atributos
Você deve usar aspas para valores string e chaves para expressões (nunca ambos).
~~~javascript
const element = <a href="https://www.reactjs.org"> link </a>;
const element = <img src={user.avatarUrl}></img>;
~~~
> Códigos e texto adaptados, traduzidos e retirados da documentação React [:page_facing_up:](https://reactjs.org/docs/introducing-jsx.html):point_left:

### Exercícios
- [exercício 1](https://github.com/nnnnadia/trybe-exercicios/commit/dc56288996435ba5bea4c5a6a5922dddae246f55)

##

#### [:arrow_left: Gerenciador de Pacotes](./gerenciador-pacotes.md#gerenciador-de-pacotes) | [ReactDOM.render :arrow_right:](./reactdom-render.md#reactdomrender)

#### [:date: Voltar para o dia 10.1](../#101-hello-world-no-react)
