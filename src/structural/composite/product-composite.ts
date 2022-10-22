// COMPONENT
export abstract class ProductComponent {
  abstract getPrice(): number;
  // add(product: ProductComponent): void { }
  // remove(product: ProductComponent): void { }
}

// LEAF
export class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
  }
  getPrice(): number {
    return this.price;
  }
}

// COMPOSITE
export class ProductComposed extends ProductComponent {
  private children: ProductComponent[] = [];
  add(...products: ProductComponent[]): void {
    products.forEach((product) => this.children.push(product));
  }
  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    if (productIndex !== -1) this.children.splice(productIndex, 1);
  }
  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }
}

// CLIENT
const tshit = new ProductLeaf("t-shirt", 40);
const skirt = new ProductLeaf("skirt", 30);
const pants = new ProductLeaf("pants", 20);
const produtBox = new ProductComposed();
produtBox.add(tshit, skirt, pants);

const tablet = new ProductLeaf("Tablet", 1_000);
const kindle = new ProductLeaf("Kindle", 300);
const anotherProductBox = new ProductComposed();
anotherProductBox.add(tablet, kindle);
produtBox.add(anotherProductBox);

console.log(produtBox);
console.log(produtBox.getPrice());
