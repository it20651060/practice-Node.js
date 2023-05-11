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
