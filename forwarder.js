const http = require('http'), fs = require('fs');

const hostname = '0.0.0.0';
const port = 8081;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
//  res.setHeader('Content-Type', 'text/plain');
  res.end(fs.readFileSync("rss"));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
