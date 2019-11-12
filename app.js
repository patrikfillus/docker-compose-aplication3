var http = require('http');
var os = require('os');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`Hostname: ${os.hostname()}\n
    {
        "nome": "Patrik",
        "cpf": "11916886908",
        "data nascimento": "25/07/1999",
      }
    `);
}).listen(9090);