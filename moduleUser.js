const myModule = require("../practice-Node.js/my-module");
console.log(myModule.myFunction());

// my-module.js is a custom module created by the user, and myFunction() is a function defined in that module.

// The require() function is used to load the my-module.js file.

// The myModule variable is assigned the value returned by require(), which is an object containing all the exported functions and variables from the module.

// Finally, the myFunction() function is called using the myModule object, and the returned value is printed to the console using console.log().

// To run this code, you need to create a my-module.js file in the same directory as the file containing the above code, and define the myFunction() function in it. Then, run the file containing the above code using the node command in the terminal.
