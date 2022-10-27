import { ShoppingOrder } from "./shopping-order";
import { ShoppingOrderState } from "./shopping-order-interface";

export class OrderRejected implements ShoppingOrderState {
  private name = "OrderRejected";

  constructor(private order: ShoppingOrder) { }

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log("Payment not allowed. Payment was rejected.");
  }

  rejectPayment(): void {
    console.log("This order is already rejected.");
  }

  waitPayment(): void {
    console.log("Not allowed to set payment state to pending. Payment was already rejected.");
  }

  shipOrder(): void {
    console.log("Not allowed to ship rejected payment order.");
  }
}
