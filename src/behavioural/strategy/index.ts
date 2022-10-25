import { DefaultDiscount } from "./shopping-cart/default-discount";
import { ECommerceShoppingCart } from "./shopping-cart/e-commerce-shopping-cart";

const shoppingCart = new ECommerceShoppingCart();
shoppingCart.discount = new DefaultDiscount();
// shoppingCart.discount = new fivePercentDiscount();
shoppingCart.addProduct({ name: "Product 1", price: 50 });
shoppingCart.addProduct({ name: "Product 2", price: 50 });
shoppingCart.addProduct({ name: "Product 3", price: 50 });
shoppingCart.addProduct({ name: "Product 4", price: 50 });
console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWitDiscount());
