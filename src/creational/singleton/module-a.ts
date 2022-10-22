import { MyDbFunc } from "./db/my-db-func";

const classicDb = MyDbFunc;
classicDb.add({ name: "Aldair", age: 34 });
classicDb.add({ name: "Paulo", age: 43 });
classicDb.add({ name: "Sete", age: 4 });
classicDb.add({ name: "Mery", age: 4 });
classicDb.remove(3);

export { classicDb };
