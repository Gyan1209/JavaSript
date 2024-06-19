/***this keyword introduction***/

console.log(this); //this is refering to global object in browser -> window and in node-> {}
function thisFunc() {
  let username = "gyan";
  //   console.log(this.username); // undefined  {pure function do not have "this" reference  }
  //   console.log(this); //this is refering to global object
}
thisFunc();

/***an incomplete statement => norrmal function can use this but arrow can**/
const arrowfun = () => {
  //   console.log(this);
};
arrowfun();

/***Arrow Function***/
const arrow = (num) => {
  return num * num;
};
const arrow2 = (num) => num * num;

const arrow3 = (num) => num * num; //no need to write return statement

/** ifie=> immediately invoked function expression**/
//Advantages
/*
1. Encapsulation and Avoiding Global Scope Pollution.
2. Creating Private Variables and Functions.
3. Avoiding Conflicts in Code with Same Variable Names.
4. Modularization of Code.
5. Execution Context Isolation.
6. Simulating Block Scope in Older JavaScript Versions.
*/
((num2) => {
  console.log("i am ifie");
  console.log(this);
})(num2); // first () is function statement and second () is function call.
