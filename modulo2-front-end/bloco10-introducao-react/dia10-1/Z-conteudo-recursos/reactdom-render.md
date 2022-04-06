## ReactDOM.render

### Renderizando um elemento
Primeiro precisamos localizar o *root* DOM, tudo dentro dele será gerenciado pelo React DOM, e depois de fato renderizamos um elemento.
~~~html
<div id="root"></div>
~~~
~~~javascript
const element = <h1>Hello, world</h1>;
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(element);
~~~

### Sintaxe
De acordo com a documentação do React [:page_facing_up:](https://reactjs.org/docs/react-dom-client.html#reference):point_left:
> ~~~javascript
> createRoot(container[, options]);
> ~~~
> #### Parâmetros
> - `container`: <br>
> É criado um *root* React com o container fornecido.
> #### Observação
> O root pode ser desmontado com `root.unmount()`.

E [:page_facing_up:](https://reactjs.org/docs/react-dom.html#legacy-reference):point_left:
> ~~~javascript
> render(element, container[, callback])
> ~~~
> #### Definições
> Renderiza um elemento React no DOM especificamente dentro do container fornecido e retorna a referência para o componente.
> 
> Caso o elemento já tenha sido renderizado no container é realizado uma atualização e apenas o (nó(s)/*node(s)*) necessário é mudado no DOM para aderir as alterações.
> 
> A callback opcional é chamada após renderização ou atualização do elemento.

##

#### [:arrow_left: JSX](./jsx.md#jsx) | [ :arrow_right:](./.md#)

#### [:date: Voltar para o dia 10.1](../#101-hello-world-no-react)
