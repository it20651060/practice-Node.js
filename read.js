// Load the fs module
const fs = require("fs");

// Use the fs module's `readFile` function to read a file
fs.readFile("file.txt", "utf8", function (err, data) {
  // Handle any errors that occur
  if (err) throw err;

  // Log the contents of the file to the console
  console.log(data);
});

// The first line loads the fs module into the fs variable, making its functions and properties available for use in the code.
// The second line uses the fs.readFile() function to read the contents of a file named file.txt. The second argument specifies the encoding to be used (in this case, utf8).
// The third argument is a callback function that is executed when the file has been read. This function takes two parameters: err, which will contain any error that occurred during the file read, and data, which will contain the contents of the file.
// If an error occurs during the file read, the code throws the error using the throw statement.
// If the file is read successfully, the contents of the file are logged to the console using the console.log() function.
