import { Customer } from "../customers/customer-protocol";
import { IndividualCustomer } from "../customers/individual-customer";
import { IndividualVehicle } from "../vehicles/individual-vehicles";
import { Vehicle } from "../vehicles/vehicle-protocol";

export class IndividualCreateVehicleCustomerFactory {
  createCustomer(customerName: string): Customer {
    return new IndividualCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);
    return new IndividualVehicle(vehicleName, customer);
  }
}
