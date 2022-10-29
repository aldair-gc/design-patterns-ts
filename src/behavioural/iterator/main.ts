import { MyDataStructure } from "./my-data-structure";
import { MyReverseIterator } from "./my-reverse-iterator";

const dataStructure = new MyDataStructure();
dataStructure.addItem("A", "B", "C", "D", "E");

const [a, b] = dataStructure;
console.log("Taken:", a, b, "\n");

for (const data of dataStructure) console.log(data);
console.log();

for (const data of dataStructure) console.log(data);
console.log();

dataStructure.changeIterator(new MyReverseIterator(dataStructure));

const [aa, bb] = dataStructure;
console.log("Taken:", aa, bb, "\n");

for (const data of dataStructure) console.log(data);
console.log();

for (const data of dataStructure) console.log(data);
console.log();
