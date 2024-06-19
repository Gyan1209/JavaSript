const nums = [1, 2, 3, 4, 5, 6];
const totalNums = nums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

//in arrow function representation
// const totalNums = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(totalNums);

//Exercise
const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const totalPrice = shoppingCart.reduce(
  (acc, currItem) => acc + currItem.price,
  0
);
console.log(totalPrice);
