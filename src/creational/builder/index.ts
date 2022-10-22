import { MainDishBuilder } from "./classes/main-dish-builder";
import { MealBox } from "./classes/meal-box";
import { Beans, Meat, Rice } from "./classes/meals";
import { VeganDishBuilder } from "./classes/vegan-dish-builder";

const rice = new Rice("Arroz", 5);
const beans = new Beans("Feijao", 6);
const meat = new Meat("Carne", 10);

const mealBox = new MealBox();

mealBox.add(rice, beans, meat);
console.log(mealBox);
console.log(mealBox.getPrice());

// using the builder

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeBeverage().makeDisert();
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

const meal2 = mainDishBuilder.reset().makeBeverage().getMeal();
console.log(meal2);
console.log(meal2.getPrice());

const veganDishBuilder = new VeganDishBuilder();
veganDishBuilder.makeMeal().getMeal();
console.log(veganDishBuilder);
console.log(veganDishBuilder.getPrice());
