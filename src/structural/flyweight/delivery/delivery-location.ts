import { DeliveryFlyweight } from "./delivery-flyweight";
import { DeliveryLocationData } from "./delivery-types";

export class DeliveryLocation implements DeliveryFlyweight {
  constructor(private readonly intrinsicState: DeliveryLocationData) { }
  deliver(name: string, number: string): void {
    console.log("Deliver to %s", name);
    console.log("in", this.intrinsicState.street, this.intrinsicState.city);
    console.log("Number:", number);
    console.log("###");
  }
}
