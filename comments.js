// Create web server
// 1. Load the http module to create an http server.
var http = require('http');

// 2. Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello World\n");
});

// 3. Listen on port 8000, IP defaults to