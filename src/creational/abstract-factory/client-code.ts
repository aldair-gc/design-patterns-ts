import { EnterpriseCreateVehicleCustomerFactory } from "./factories/enterprise-customer-factory";
import { IndividualCreateVehicleCustomerFactory } from "./factories/individual-customer-factory";

const enterpriseFactory = new EnterpriseCreateVehicleCustomerFactory();
const individualFactory = new IndividualCreateVehicleCustomerFactory();

const car1 = enterpriseFactory.createVehicle("Compass", "Aldair");
const car2 = individualFactory.createVehicle("Creta", "Paulo");

car1.pickUp();
car2.pickUp();
