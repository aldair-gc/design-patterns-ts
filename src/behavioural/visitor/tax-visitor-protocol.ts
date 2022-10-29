import { AlcoholicDrink } from "./alcoholic-drink";
import { Cigarette } from "./cigarrete";
import { Food } from "./food";

export interface TaxVisitorProtocol {
  calculateTaxesForFood(food: Food): number;
  calculateTaxesForCigarette(cigarette: Cigarette): number;
  calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number;
}
