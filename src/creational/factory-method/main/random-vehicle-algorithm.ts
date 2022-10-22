import { BicycleFactory } from "../factories/bicycle-factory";
import { CarFactory } from "../factories/car-factory";
import { randomNumbers } from "../utils/random-numbers";
import { Vehicle } from "../vehicles/vehicle";

export function randomCarAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();
  const car1 = carFactory.getVehicle("Car1");
  const car2 = carFactory.getVehicle("Car2");
  const bicycle1 = bicycleFactory.getVehicle("Bicycle1");
  const bicycle2 = bicycleFactory.getVehicle("Bicycle2");
  const vehicles = [car1, car2, bicycle1, bicycle2];
  return vehicles[randomNumbers(vehicles.length)];
}
