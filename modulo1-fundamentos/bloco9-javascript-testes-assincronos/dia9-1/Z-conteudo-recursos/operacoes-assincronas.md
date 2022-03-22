## Operações Assíncronas

### Programação Síncrona
Vamos criar uma variável e imprimir seu valor:
~~~javascript
const nome = 'Nádia';
const mensagem = `Olá, ${name}, bom dia.`;
console.log(mensagem);
~~~
Esse programa é executado linha a linha e precisa ser assim, pois cada passo depende do outro, isso o faz ser um programa síncrono.

Em programas de execução prolongada (*long-running*) isso pode ser um problema, pois enquanto o aplicativo web não retoma o controle do processador o navegador está bloqueado para receber novas entradas, isto é chamado de *blocking*.

### Programação Assíncrona
Para contornar esses problemas muitas funcionalidades de APIs da Web, especialmente aquelas que acessam ou buscam algum recurso externo, utilizam código assíncrono na execução.

Existem dois tipos principais de estilo de código assíncrono que você encontrará no código JavaScript, as callbacks com um estilo old-school e código em um estilo das promises mais recente. 

> Texto adaptado do MDN <br>
> [1] Conceitos gerais da programação assíncrona [:page_facing_up:](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Asynchronous):point_left: <br>
> [2] Introdução ao JavaScript Async [:page_facing_up:](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Asynchronous):point_left:

##

#### [Callbacks :arrow_right:](./callbacks.md#callbacks)

#### [:date: Voltar para o dia 9.1](../#91-javascript-assíncrono-e-callbacks)
