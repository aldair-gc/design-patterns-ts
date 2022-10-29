import { MyDataStructure } from "./my-data-structure";
import { MyIteratorProtocol } from "./my-iterator-protocol";

export class MyDefaultIterator implements MyIteratorProtocol<string> {
  private index = 0;
  constructor(private readonly dataStructure: MyDataStructure) { }

  reset(): void {
    this.index = 0;
  }

  next(): IteratorResult<string> {
    // const returnValue = this.makeValue(this.dataStructure.items[this.index]);
    // returnValue.done = this.index >= this.dataStructure.size();
    // this.index++;
    // return returnValue;
    const value = this.dataStructure.items[this.index];
    const done = this.index++ >= this.dataStructure.size();
    return { value, done };
  }

  // private makeValue(value: string): IteratorResult<string> {
  //   return { value, done: false };
  // }
}
