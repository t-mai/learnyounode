var http = require('http');
var url = require('url');
var port = process.argv[2];

function parsetime(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    };
}

function unixtime(time) {
    return {unixtime: time.getTime()};
}

var server = http.createServer(function (request, response) {
    var parseURL = url.parse(request.url, true);
    var time = new Date(parseURL.query.iso);

    var result;

    if (request.url.indexOf('/api/parsetime') > - 1) {
        result = parsetime(time);
    } else if (request.url.indexOf('/api/unixtime') > -1) {
        result = unixtime(time);
    }

    if (result) {
        response.writeHead(200, {'Content-Type': 'applicatoin/json'});
        response.end(JSON.stringify(result));
    } else {
        response.writeHead(404);
        response.end();
    }
});
server.listen(port);