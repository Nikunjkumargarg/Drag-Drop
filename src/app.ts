// function Logging(input: string) {
//   return function (constructor: Function) {
//     console.log("logging decorator");
//   };
// }
// function withTemplate(template: string, id: string) {
//   return function (constructor: any) {
//     const element = document.getElementById(id);
//     const p = new constructor();
//     if (element) {
//       console.log("inside");
//       element.innerHTML = template;
//       element.querySelector("h1")!.textContent = p.constructor.name;
//       console.log(p.constructor.name);
//     }
//   };
// }
// @Logging("logging")
// @withTemplate("<h1>Nikunj is learning and thriving</h1>", "hookid")
// class person {
//   constructor() {
//     name: "max";
//     console.log("person is creating");
//   }
// }

// const pers = new person();

function Log(target: any, propertyName: string) {
  console.log("property decorator!");
  console.log(target, propertyName);
}
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("accessor decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}
class Product {
  title: string;
  @Log
  private _price: number;
  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price. price should be positive");
    }
  }
  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
