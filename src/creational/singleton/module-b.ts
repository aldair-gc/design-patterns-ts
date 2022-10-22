import { MyDbFunc } from "./db/my-db-func";
import { classicDb as myDbFromModA } from "./module-a";

const classicDb = MyDbFunc;
classicDb.add({ name: "Adilson", age: 31 });
classicDb.add({ name: "Maira", age: 29 });
classicDb.add({ name: "Heitor", age: 4 });
classicDb.add({ name: "Luna", age: 1 });

classicDb.show();

console.log(classicDb === myDbFromModA);
