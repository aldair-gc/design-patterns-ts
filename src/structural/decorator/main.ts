import { ProductCustomizationDecorator } from "./product/product-customization-decorator";
import { ProductStampDecorator } from "./product/product-stamp-decorator";
import { Tshirt } from "./product/t-shirt";

const tshirt = new Tshirt();
const tshirtWithStamp = new ProductStampDecorator(tshirt);
const customizedTshirt = new ProductCustomizationDecorator(tshirt);

console.log(tshirt.getName(), tshirt.getPrice());
console.log(tshirtWithStamp.getName(), tshirtWithStamp.getPrice());
console.log(customizedTshirt.getName(), customizedTshirt.getPrice());
