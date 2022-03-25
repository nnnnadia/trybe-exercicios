## Fetch API
### O que é?
A Fetch API fornece uma interface para buscar recursos. 

#### Acesso ao método
Você pode ter acesso ao método fetch utilizando o objeto global e método `GlobalFetch.fetch()`.

Ou pode rodar direto no node. Caso não tenha o package.json:
~~~
npm init -y
~~~
Instale o node-fetch:
~~~
npm i node-fetch@^2
~~~
E importe num arquivo JavaScript usando:
~~~javascript
const fetch = require('node-fetch')
~~~
(Desta forma não precisamos do `GlobalFetch` para chamar o método.)

### Sintaxe

> ~~~javascript
> const fetchResponsePromise = fetch(resource [, init]);
> ~~~
> #### Parâmetros
> - `resource`: <br>
> Isto define o recurso que você deseja buscar. Isto pode ser:
> 	- String (...) que fornece a URL do recurso que você deseja buscar.
> 	- Um objeto `Request`.
> - init (opcional): <br>
> Um objeto contendo quaisquer configurações customizadas que você deseja aplicar à solicitação. Veja as opções possíveis na documentação:
> 
> "O método global `fetch()` inicia o processo de busca de um recurso da rede, retornando uma promessa que é cumprida assim que a resposta estiver disponível. A promessa é resolvida para o objeto Response que representa a resposta à sua solicitação."
> 
> Trechos retirados no MDN [:page_facing_up:](https://developer.mozilla.org/pt-BR/docs/Web/API/fetch):point_left:

##

#### [:arrow_left: Promises](./promises.md#promises) | [ :arrow_right:](.)

#### [:date: Voltar para o dia 9.2](../#92-javascript-assíncrono---fetch-api-e-asyncawait)
