import { Customer } from "../customers/customer-protocol";
import { EnterpriseCustomer } from "../customers/enterprise-customer";
import { EnterpriseVehicle } from "../vehicles/enterprise-vehicles";
import { Vehicle } from "../vehicles/vehicle-protocol";

export class EnterpriseCreateVehicleCustomerFactory {
  createCustomer(customerName: string): Customer {
    return new EnterpriseCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);
    return new EnterpriseVehicle(vehicleName, customer);
  }
}
