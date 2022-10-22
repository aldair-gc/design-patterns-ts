import { Customer } from "../customers/customer-protocol";
import { Vehicle } from "../vehicles/vehicle-protocol";

export interface CreateVehicleCustomerFactory {
  createCustomer(name: string): Customer;
  createVehicle(name: string, customerName: string): Vehicle;
}
