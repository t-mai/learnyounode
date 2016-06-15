var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function (request, response) {
    var readStream = fs.createReadStream(file);
    readStream.on('open', function () {
        readStream.pipe(response);
    });

    readStream.on('error', function (error) {
        response.end(error);
    });
});
server.listen(port);

/** Official solution
 *var http = require('http')
     var fs = require('fs')
 
     var server = http.createServer(function (req, res) {
       res.writeHead(200, { 'content-type': 'text/plain' })
 
       fs.createReadStream(process.argv[3]).pipe(res)
     })
 
     server.listen(Number(process.argv[2])) 
 *
 */