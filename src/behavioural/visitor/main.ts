import { AlcoholicDrink } from "./alcoholic-drink";
import { BrazilTaxVisitor } from "./brazil-tax-visitor";
import { Cigarette } from "./cigarrete";
import { Food } from "./food";
import { FranceTaxVisitor } from "./france-tax-visitor";

const food = new Food(10);
const cigarette = new Cigarette(5);
const alcoholicDrink = new AlcoholicDrink(5);

const brazilTaxVisitor = new BrazilTaxVisitor();
const franceTaxVisitor = new FranceTaxVisitor();

const cart = [food, cigarette, alcoholicDrink];
const total = cart.reduce((sum, item) => item.getPrice() + sum, 0);
const totalWithTaxesBrazil = cart.reduce((sum, item) => item.getPriceWithTaxes(brazilTaxVisitor) + sum, 0);
const totalWithTAxesFrance = cart.reduce((sum, item) => item.getPriceWithTaxes(franceTaxVisitor) + sum, 0);

console.log(total);
console.log(totalWithTaxesBrazil);
console.log(totalWithTAxesFrance);
