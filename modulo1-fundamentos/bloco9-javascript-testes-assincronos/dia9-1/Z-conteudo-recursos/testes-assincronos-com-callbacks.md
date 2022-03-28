## Testes Assíncronos com Callbacks

### Sintaxe

Para realizar os testes em funções assíncronas devemos esperar pelo retorno (pela função estar pronta, *done*) dela.
> ~~~javascript
> test('the data is peanut butter', done => {
>   function callback(data) {
>     try {
>       expect(data).toBe('peanut butter');
>       done();
>     } catch (error) {
>       done(error);
>     }
>   }
>   fetchData(callback);
> }):
> ~~~
> Retirado da documentaço do Jest.

##

#### [:arrow_left: Lidando com erros em operações assíncronas](./lidando-com-erros-operacoes-assincronas.md#lidando-com-erros-em-operações-assíncronas) | [Setup e Teardown :arrow_right:](./setup-teardown.md#setup-e-teardown)

#### [:date: Voltar para o dia 9.1](../README.md#91-javascript-assíncrono-e-callbacks)
