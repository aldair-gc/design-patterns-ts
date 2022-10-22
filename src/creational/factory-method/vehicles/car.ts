import { Vehicle } from "./vehicle";

export class Car implements Vehicle {
  constructor(private name: string) { }
  pickUp(costumerName: string): void {
    console.log(`${this.name} is picking up ${costumerName}`);
  }
  stop(): void {
    console.log(`${this.name} parou`);
  }
}
