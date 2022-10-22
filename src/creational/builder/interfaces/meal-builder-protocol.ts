export interface MealBuilderProtocol {
  makeMeal(): this;
  makeBeverage?(): this;
  makeDisert?(): this;
}
