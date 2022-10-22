export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];
  constructor(public name: string, public age: number) { }

  clone(): Person {
    const newObject = new Person(this.name, this.age);
    newObject.addresses = this.addresses.map((item) => item.clone());
    return newObject;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address implements Prototype {
  constructor(public street: string, public number: number) { }

  clone(): Address {
    return new Address(this.street, this.number);
  }
}

const address1 = new Address("Star St", 3);
const person1 = new Person("Aldair", 34);
person1.addAddress(address1);
const person2 = person1.clone();

person1.addresses[0].number = 4;

console.log(person1);
person2.name = "Paulo";
console.log(person2);
console.log(person2.addresses);
