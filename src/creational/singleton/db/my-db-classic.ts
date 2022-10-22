import { User } from "../interfaces/users";

export class MyDbClassic {
  private static _instance: MyDbClassic | null = null;
  private users: User[] = [];

  private constructor() { }

  static get instance(): MyDbClassic {
    if (MyDbClassic._instance === null) {
      MyDbClassic._instance = new MyDbClassic();
    }
    return MyDbClassic._instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}
