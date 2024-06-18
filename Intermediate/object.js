const sym = Symbol();
// console.log(sym.description);
// console.log(typeof sym);
// sym.description = "newkey";
// console.log(typeof sym);

// data stored in key-value pair is called object
const obj = {
  name: "Rohan",
  [sym]: "newKey",
  age: 20,
  id: 101,
  isLoggedIn: false,
};

// console.log(obj["name"]); // if in object key is also in string it cannot access by dot(.) operator
// console.log(obj[sym]);

//adding method in object
obj.greeting = function () {
  console.log(`hi i'm Rohan`);
};
// console.log(obj.greeting());

//assign
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };
const mergeObj = Object.assign({}, obj1, obj2, obj3); //{} -> target and rest are source
// console.log(mergeObj);

const symbolKeys = Object.getOwnPropertySymbols(obj); //for access symbol key
// console.log(Object.keys(obj));
// console.log(symbolKeys);

//object destructuring
/*object destructuring allows you to extract properties from objects and bind them to variables.*/
const { name: n } = obj;
console.log(n);

//JSON => Java Script object notation
/*
    {
        "a":"apple",
        "b":"ball",
        "c":"cat",
    }
 */
