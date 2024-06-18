//till date Date is not a global object
// so we cannot use it like date.toString etc
//we have to create an object of Date using new keyword

const ourDate = new Date();
console.log(ourDate);
console.log(ourDate.toISOString());
console.log(ourDate.toJSON());
console.log(ourDate.getDate());
console.log(ourDate.toLocaleString());
