//http server
http = require('http');
fs = require('fs');
var static = require('./static');
//creating a server
server = http.createServer(function (request, response){
  response.writeHead(200, {'Content-type': 'text/html'});
  static.static(request, response);
});
server.listen(8000);
console.log("Running in localhost at port 8000");        
