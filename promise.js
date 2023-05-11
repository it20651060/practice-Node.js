const myPromise = new Promise((resolve, reject) => {
  let condition = Math.random();
  if (condition % 2 == 1) {
    resolve("Success!");
  } else {
    reject("Failure!");
  }
});
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//   In JavaScript, a Promise is an object that represents a value that may not be available yet, but will be resolved or rejected in the future. Promises provide a way to handle asynchronous operations and provide a cleaner alternative to using nested callbacks.

// In the example code you provided, a new Promise is created with the new Promise() constructor. The constructor takes a function as its argument, which is called the "executor function". This function takes two arguments: resolve and reject, which are functions that are used to resolve or reject the Promise, respectively.

// Inside the executor function, there is a condition that determines whether the Promise should be resolved with a success message or rejected with a failure message.

// The then() method is called on the Promise object to register a callback function that will be called when the Promise is resolved successfully. The catch() method is called to register a callback function that will be called when the Promise is rejected.

// When the Promise is resolved, the then() method is called with the result of the Promise, which in this case is the string "Success!". The console.log() statement inside the then() callback will print this result to the console.

// If the Promise is rejected, the catch() method is called with the error message, which in this case is the string "Failure!". The console.log() statement inside the catch() callback will print this error message to the console.

// To use this Promise in another part of your program, you can simply call the myPromise variable and chain the then() and catch() methods to handle the resolved or rejected result, like so:
