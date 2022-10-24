import { deliveryContext } from "./delivery/delivery-context";
import { DeliveryFactory } from "./delivery/delivery-factory";

const factory = new DeliveryFactory();
deliveryContext(factory, "Aldair", "1", "First St", "Seventeen");
deliveryContext(factory, "Paulo", "1", "First St", "Seventeen");
deliveryContext(factory, "Sete", "3", "First St", "Seventeen");
deliveryContext(factory, "Adilson", "4", "Orange St", "Eighteen");
deliveryContext(factory, "Maira", "4", "Orange St", "Eighteen");

console.log(factory.getLocations());
