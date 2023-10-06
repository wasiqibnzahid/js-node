class MyMapClass<K, T> {
  private list: T[] = [];
  private keyList: K[] = [];
  private limit = 10;
  constructor(limit?: number) {
    if (limit) {
      this.limit = limit;
    }
  }
  add(key: K, value: T): void {
    const index = this.keyList.indexOf(key);
    if (index !== -1) {
      this.list[index] = value;
      return;
    }
    if (this.keyList.length >= this.limit) {
      throw new Error(`We can only have upto ${this.limit} items in this map`);
    }
    this.keyList.push(key);
    this.list.push(value);
  }
  get(key: K): T | null {
    const index = this.keyList.indexOf(key);
    if (index === -1) return null;
    return this.list[index];
  }
  remove(key: K): void {
    const index = this.keyList.indexOf(key);
    if (index !== -1) {
      this.keyList.splice(index, 1);
      this.list.splice(index, 1);
    }
  }
  values(): IterableIterator<T> {
    return this.list[Symbol.iterator]();
  }
  keys(): IterableIterator<K> {
    return this.keyList[Symbol.iterator]();
  }
  exists(key: K): boolean {
    return this.keyList.includes(key);
  }
}

const myMap = new MyMapClass();
console.log(myMap);
