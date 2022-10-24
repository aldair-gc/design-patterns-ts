import { MainDishBuilder } from "../../creational/builder/classes/main-dish-builder";
import { VeganDishBuilder } from "../../creational/builder/classes/vegan-dish-builder";

export class BuilderFacade {
  // Facade to folder src/creation/builder/index.ts
  private mainDishBuilder = new MainDishBuilder();
  private veganDishBuilder = new VeganDishBuilder();

  makeMeal1(): void {
    this.mainDishBuilder.makeMeal().makeBeverage().makeDisert();
    console.log(this.mainDishBuilder.getMeal());
    console.log(this.mainDishBuilder.getPrice());
  }

  makeMeal2(): void {
    const meal2 = this.mainDishBuilder.reset().makeBeverage().getMeal();
    console.log(meal2);
    console.log(meal2.getPrice());
  }

  makeVeganMeal(): void {
    this.veganDishBuilder.makeMeal().getMeal();
    console.log(this.veganDishBuilder);
    console.log(this.veganDishBuilder.getPrice());
  }
}
