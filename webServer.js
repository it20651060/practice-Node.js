// Load the http module
const http = require("http");

// Use the http module's `createServer` function to create a new server
http
  .createServer(function (req, res) {
    // Set the response header to indicate that the response will be HTML
    res.writeHead(200, { "Content-Type": "text/html" });

    // Write the response body
    res.write("Hello World!");

    // End the response
    res.end();
  })
  .listen(8090);

//   The first line loads the http module into the http variable, making its functions and properties available for use in the code.
// The second line uses the http.createServer() function to create a new HTTP server that listens for incoming requests.
// The createServer() function takes a callback function as an argument, which will be executed every time a request is received by the server. This callback function takes two parameters: req (the incoming request object) and res (the response object that will be sent back to the client).
// The res.writeHead() function sets the response header to indicate that the response will be HTML. The 200 argument is the HTTP status code, which indicates that the request was successful.
// The res.write() function writes the response body, which in this case is the string "Hello World!".
// The res.end() function ends the response and sends it back to the client.
// The listen() function starts the server and specifies the port number (in this case, port 8080) on which the server should listen for incoming requests.
// In order to use this code in your Node.js project, you can add it to a new or existing JavaScript file in your project, such as index.js or app.js.

// To run the web server, you can run the JavaScript file in your terminal using the node command:
