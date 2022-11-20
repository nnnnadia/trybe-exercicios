export default class Product {
  public name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this._price = price;
  }

  get price() {
    return this._price;
  }
}
