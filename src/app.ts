interface lengthy {
  length: number;
}
function countAndDescribe<T extends lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got one value";
  } else if (element.length > 1) {
    descriptionText = "Got values";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe({ name: "nikunj", length: 6 }));
