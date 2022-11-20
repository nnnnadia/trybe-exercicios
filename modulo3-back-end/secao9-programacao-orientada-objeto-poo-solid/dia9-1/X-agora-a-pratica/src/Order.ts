import Customer from './Customer';
import Product from './Product';

export default class Order {
  public consumption: Product[];
  public customer: Customer;
  public payment: string;
  public descount?: number;

  constructor(
    consumption: Product[],
    customer: Customer,
    payment: string,
    descount: number,
  ) {
    this.consumption = consumption;
    this.customer = customer;
    this.payment = payment;
    this.descount = descount;
  }
}
