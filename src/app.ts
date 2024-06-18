function Logging(input: string) {
  return function (constructor: Function) {
    console.log("logging decorator");
  };
}
function withTemplate(template: string, id: string) {
  return function (constructor: any) {
    const element = document.getElementById(id);
    const p = new constructor();
    if (element) {
      console.log("inside");
      element.innerHTML = template;
      element.querySelector("h1")!.textContent = p.constructor.name;
      console.log(p.constructor.name);
    }
  };
}
@Logging("logging")
@withTemplate("<h1>Nikunj is learning and thriving</h1>", "hookid")
class person {
  constructor() {
    name: "max";
    console.log("person is creating");
  }
}

const pers = new person();
