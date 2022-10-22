import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol";
import { MealBox } from "./meal-box";
import { Beans, Beverage, Disert, Meat, Rice } from "./meals";

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice("Arroz", 5);
    const beans = new Beans("Feijao", 6);
    const meat = new Meat("Carne", 10);
    this._meal.add(rice, beans, meat);
    return this;
  }
  makeBeverage(): this {
    const beverage = new Beverage("Soda", 2);
    this._meal.add(beverage);
    return this;
  }
  makeDisert(): this {
    const disert = new Disert("Pudim", 3);
    this._meal.add(disert);
    return this;
  }
  getMeal(): MealBox {
    return this._meal;
  }
  getPrice(): number {
    return this._meal.getPrice();
  }
}
