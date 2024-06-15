class Base {
  num: number;

  private constructor(num: number) {
    this.num = num;
  }

  getNumber(): number {
    return this.num;
  }

  static createInstance(num: number): Base {
    return new Base(num);
  }
}

// Usage
const instance = Base.createInstance(10);
console.log(instance.getNumber()); // Output: 10

// This would cause an error
// const invalidInstance = new Base(10); // Error: Constructor of class 'Base' is private and only accessible within the class declaration.
