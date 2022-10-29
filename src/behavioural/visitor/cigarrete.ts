import { Product } from "./product";
import { TaxVisitorProtocol } from "./tax-visitor-protocol";

export class Cigarette extends Product {
  constructor(protected price: number) {
    super("cigarette", price);
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForCigarette(this);
  }
}
