import { MyDataStructure } from "./my-data-structure";
import { MyIteratorProtocol } from "./my-iterator-protocol";

export class MyReverseIterator implements MyIteratorProtocol<string> {
  constructor(private readonly dataStructure: MyDataStructure) { }
  private index = this.dataStructure.size() - 1;

  reset(): void {
    this.index = this.dataStructure.size() - 1;
  }

  next(): IteratorResult<string> {
    const value = this.dataStructure.items[this.index];
    const done = this.index-- < 0;
    return { value, done };
  }
}
