const http = require('http'); // Node standard libraries

// This callback runs everytime an HTTP request hits the server:
// req has information about the request
// res is the response object: do stuff to res to send the response
http.createServer((req, res) => {
  console.log(`Serving request: ${ req.method } ${ req.url }`);

  res.writeHeader(200, {'Content-Type': 'text/plain'});

  if (req.url === '/groucho') {
    res.end('Hello from Groucho');
  } else if (req.url === '/harpo') {
    res.end('Hello from Harpo');
  } else {
    res.end('Hello in a generic way');
  }

}).listen(1337);

console.log('Server is running at http://localhost:1337/');
