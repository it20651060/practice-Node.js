// Load the https module
const https = require("https");

// Use the https module's `get` function to make an HTTP GET request to the specified URL
https
  .get("https://jsonplaceholder.typicode.com/posts/1", (resp) => {
    let data = "";

    // The 'data' event is emitted when a chunk of data is received from the server
    resp.on("data", (chunk) => {
      data += chunk;
    });

    // The 'end' event is emitted when all data has been received from the server
    resp.on("end", () => {
      // Parse the received data as JSON and log it to the console
      console.log(JSON.parse(data));
    });
  })
  .on("error", (err) => {
    // If an error occurs, log the error message to the console
    console.log("Error: " + err.message);
  });

//   The first line loads the https module into the https variable, making its functions and properties available for use in the code.
// The second line uses the https.get() function to make an HTTP GET request to the specified URL.
// The https.get() function takes two arguments: the URL to which the request should be sent, and a callback function that will be executed when the response is received.
// The callback function takes one argument, resp, which is the response object that represents the response received from the server.
// The let data = '' line initializes an empty string to which the received data will be appended.
// The resp.on('data', (chunk) => { ... }) function sets up an event listener for the 'data' event that is emitted when a chunk of data is received from the server. The received data is appended to the data string.
// The resp.on('end', () => { ... }) function sets up an event listener for the 'end' event that is emitted when all data has been received from the server. When the 'end' event is emitted, the received data is parsed as JSON using JSON.parse(), and logged to the console.
// The .on('error', (err) => { ... }) function sets up an event listener for the 'error' event that is emitted if an error occurs during the request. If an error occurs, the error message is logged to the console.
