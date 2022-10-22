import { CarFactory } from "./factories/car-factory";
import { randomCarAlgorithm } from "./main/random-vehicle-algorithm";
import { randomNumbers } from "./utils/random-numbers";
import { Car } from "./vehicles/car";

const fusca = new Car("Fusca"); // instancia a classe Car diretamente
fusca.pickUp("Joana");
fusca.stop();

const celta = new Car("Celta"); // instancia novamente a classe Car
celta.pickUp("Joana");
celta.stop();

// Using Factory Method

const carFactory = new CarFactory(); // somente uma instancia criada

const newFusca = carFactory.getVehicle("newFusca"); // chama a factory que retorna um objeto
newFusca.pickUp("Jonas");
newFusca.stop();

const newCelta = carFactory.getVehicle("newCelta"); // chama a factory que retorna um objeto
newCelta.pickUp("Jenna");
newCelta.stop();

// new test

const customerNames = ["Aldair", "Paulo", "Sete"];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm();
  const name = customerNames[randomNumbers(customerNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  console.log("*");
}
