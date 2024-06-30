/*const promise = new Promise(function (resolver, reject) {
  setTimeout(function () {
    console.log("Async Task is completed");
    resolver();
  }, 1000);
});
promise.then(() => {
  console.log("promis consumed");
});
console.log(promise);



new Promise(function (resolver, reject) {
  setTimeout(function () {
    console.log("Async Task2 is completed");
    resolver();
  }, 1000);
}).then(() => {
  console.log("promis2 consumed");
});



new Promise(function (resolver, reject) {
  setTimeout(function () {
    console.log("Async Task2 is completed");
    resolver({ user: "Rohan", email: "gyanb230@gmail.com" });
  }, 1000);
}).then((user) => {
  console.log("promis2 consumed");
  console.log(user);
});
*/

/*new Promise(function (resolver, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolver({ user: "Rohan", email: "gyanb230@gmail.com" });
    } else {
      reject("Oops Something went Wrong!");
    }
  }, 1000);
})
  .then((user) => {
    console.log(user);
    return user.user;
  })
  .then((username) => {
    // chaining its advantage is to prevent from callback hell.
    console.log(username);
  })
  .catch((errorMsg) => {
    console.log(errorMsg);
  });
  */

//using async await
// const promisFunc = new Promise(function (resolver, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolver({ user: "Rohan", email: "gyanb230@gmail.com" });
//     } else {
//       reject("Oops Something went Wrong!");
//     }
//   }, 1000);
// });

// async function consumePromisFunc() {
//   try {
//     const response = await promisFunc;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
//consumePromisFunc();

const promisFunc = new Promise(function (resolver, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolver("https://jsonplaceholder.typicode.com/todos");
    } else {
      reject("Oops Something went Wrong!");
    }
  }, 1000);
});

async function consumePromisFunc() {
  try {
    const responselink = await promisFunc;
    const response = await fetch(responselink);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
consumePromisFunc();

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
    console.log("inside error block");
  });
