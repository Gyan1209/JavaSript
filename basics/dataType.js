"useStrict"; //treated all js code as new version

//data type
/*
primitive dataType(call by value) values are assigned in stack
    1. number=>range 0->2**53
    2. bigint
    3. string=>""
    4. boolean=> true/false
    5. null=>standalone value
    6. undefined=>
    7. symbol=> unique

non primitive(call by reference) values are assigned in heap
    1. object
    2. functions
    3. array

*/

//symbol
const id = Symbol(10);
const anotherid = Symbol(10);
console.log(id === anotherid);

console.log(typeof undefined); //undefined
console.log(typeof null); //object
const obj = {
  name: "gyan",
  marks: 80,
};
console.log(typeof obj);

//primitive in stack memory

let value1 = 20;
let value2 = value1; //value of value1 copy in value2 not its reference
value2 = 30; //hence no change in value2 not in value1
console.log(`${value1} + ${value2}`);

//non primitive in heap

const customer1 = {
  name: "rohan",
  email: "rohan@gmail.com",
}; //memory allocate in heap
const customer2 = customer1; //its reference is copied
customer2.email = "rohan123@gmail.com";
console.log(`${customer1.email}  ${customer2.email}`);
