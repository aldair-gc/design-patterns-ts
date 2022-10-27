import { OrderApproved } from "./order-approved";
import { OrderRejected } from "./order-rejected";
import { ShoppingOrder } from "./shopping-order";
import { ShoppingOrderState } from "./shopping-order-interface";

export class OrderPending implements ShoppingOrderState {
  private name = "OrderPending";

  constructor(private order: ShoppingOrder) { }

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    this.order.setState(new OrderApproved(this.order));
  }

  rejectPayment(): void {
    this.order.setState(new OrderRejected(this.order));
  }

  waitPayment(): void {
    console.log("This order's state is already waiting payment.");
  }

  shipOrder(): void {
    console.log("Payment pending. Order not send.");
  }
}
