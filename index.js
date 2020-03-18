var http = require('http')

//
// Create your target server
//
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
  res.end();
}).listen(9000);