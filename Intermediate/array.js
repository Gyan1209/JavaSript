//Array in js stores the value of any data type
//In copy operation of array shallow copy created.
//shallow copy:- copy of array with same reference point.
//deep copy:- it do not share the same reference.

const array = [1, 2, 3];
const array2 = new Array(4, 5, 6);
array.push("rohan");
// console.log(array);

//spread operetor
const new_array = [...array, ...array2];
// console.log(new_array);

//flat
//it return a single array
const array3 = [1, 2, [3, 5], [8, 9, [10, 2]]];
const realarray = array3.flat(1);
console.log(realarray);

//from method

console.log(Array.from({ name: "gyan" })); //***it gives [] empty array if it could not form an valid array
