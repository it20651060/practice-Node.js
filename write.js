// Load the fs module
const fs = require("fs");

// Use the fs module's `writeFile` function to write to a file
fs.writeFile("file.txt", "Hello World!", function (err) {
  // Handle any errors that occur
  if (err) throw err;

  // Log a message to the console indicating that the file was saved successfully
  console.log("File saved!");
});

// The first line loads the fs module into the fs variable, making its functions and properties available for use in the code.
// The second line uses the fs.writeFile() function to write the string "Hello World!" to a file named file.txt. If the file does not exist, it will be created.
// The third argument is a callback function that is executed when the file has been written. This function takes one parameter: err, which will contain any error that occurred during the file write.
// If an error occurs during the file write, the code throws the error using the throw statement.
// If the file is written successfully, a message is logged to the console using the console.log() function
