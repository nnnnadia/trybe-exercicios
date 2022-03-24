## Promises

### O que são
São objetos que representam o estado intermediário de uma ação, estes estados são:
- Pending (pendente): a partir ponto inicial, significa que está sendo executada.
- Fulfilled (resolvida): retornou com sucesso a requisição.
- Rejected (rejeitada): algo deu errado e o retorno foi um erro.

#### Fila de eventos
Operações assíncronas são colocadas em uma fila de eventos que é executada após o término da execução da *main thread*. Tais operações são feitas quando possível e retornam seu resultado para o ambiente JavaScript.

#### Vantagens sobre as callbacks
- Você pode encadear vários blocos `.then()` passando o resultado de uma como parâmetro de outra, já que também retornam uma promise, evitando o tal *callback hell*.
- As callbacks das promises são chemadas na ordem que são colocadas na fila.
- O tratamento de erros é muito melhor, ao invés de lidar individualmente com os erros de cada callback você pode trata-los em um único bloco `.catch()`.
