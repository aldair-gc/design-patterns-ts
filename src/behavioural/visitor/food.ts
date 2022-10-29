import { Product } from "./product";
import { TaxVisitorProtocol } from "./tax-visitor-protocol";

export class Food extends Product {
  constructor(protected price: number) {
    super("food", price);
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForFood(this);
  }
}
