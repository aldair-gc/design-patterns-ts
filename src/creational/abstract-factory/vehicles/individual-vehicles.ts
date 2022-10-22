import { Customer } from "../customers/customer-protocol";
import { Vehicle } from "./vehicle-protocol";

export class IndividualVehicle implements Vehicle {
  constructor(public name: string, private readonly customer: Customer) { }
  pickUp(): void {
    console.log(`${this.name} is tracking and picking up ${this.customer.name}`);
  }
}
