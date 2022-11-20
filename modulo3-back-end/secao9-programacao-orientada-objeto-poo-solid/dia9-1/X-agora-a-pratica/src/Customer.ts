/*
  Exercício 3
    Crie uma classe que represente
      uma pessoa cliente da lanchonete,
      uma classe que represente um pedido
      e uma que represente um item do pedido.
*/

export default class Customer {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}