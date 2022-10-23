import { ProductProtocol } from "./product-protocol";

export class Tshirt implements ProductProtocol {
  private name = "T-shirt";
  private price = 49.9;
  getName(): string {
    return this.name;
  }
  getPrice(): number {
    return this.price;
  }
}
