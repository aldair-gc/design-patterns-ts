export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];
  constructor(public name: string, public age: number) { }

  clone(): this {
    const newObject = Object.create(this);
    return newObject;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address {
  constructor(public street: string, public number: number) { }
}

const address1 = new Address("Star St", 3);
const person1 = new Person("Aldair", 34);
person1.addAddress(address1);
const person2 = person1.clone();

console.log(person1);
person2.name = "Paulo";
console.log(person2);
console.log(person2.addresses);
