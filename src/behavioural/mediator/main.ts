import { Buyer } from "./buyer";
import { Mediator } from "./mediator";
import { Seller } from "./seller";

const seller1 = new Seller();
seller1.addProduct({ id: "1", name: "shorts", price: 29.9 });
seller1.addProduct({ id: "2", name: "t-shirt", price: 19.9 });

const seller2 = new Seller();
seller2.addProduct({ id: "3", name: "skirt", price: 49.9 });
seller2.addProduct({ id: "4", name: "shoes", price: 59.9 });

const mediator = new Mediator();
mediator.addSeller(seller1, seller2);

const buyer = new Buyer(mediator);
buyer.viewProducts();
buyer.buy("2");
buyer.buy("3");
buyer.viewProducts();
