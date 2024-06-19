//function => A function is a block of code designed to perform a particular task.They help in organizing code, reusing code, and making the code more readable and maintainable.

//function expression and function statement
/*function expression=> Assign function to a variable
  function statement=> declare and define a function 
*/
function greeting(name) {
  //name=> function parameter
  console.log(`Hi i'm ${name}`);
  return `i am called`; //return this function from where it has been called
}

greeting; // it is only the reference of that funtion

// to call that function
console.log(greeting("Gyan")); //Gyan=>function argument

//***rest operator***
function myfun(...num) {
  // (...) => it is rest or spread operator
  return num; // return an array of given parameter.
}
console.log(myfun(10, 20, "gyan"));

//passing object to a function
const obj = {
  name: "Rohan",
  age: 20,
  id: 101,
  isLoggedIn: false,
};

function objectFunc(object) {
  return object;
}
console.log(objectFunc(obj));

//passing array to a function
const array = [1, 2, 3];
function arrayFunc(array) {
  return array;
}
console.log(arrayFunc(array));
