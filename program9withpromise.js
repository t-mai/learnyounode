var http = require('http');
var bl = require('bl');
var promise = require('promise');

var urls = process.argv.slice(2,5);

function fetch(url) {
    return new promise(function (resolve, reject) {
        http.get(url, function (response) {
            response.pipe(bl(function (err, data) {
                if (err) {
                    reject(err);
                }
                resolve(data.toString());
            }));
        });
    });
}

promise.all(urls.map(fetch)).then(function (responses) {
    responses.forEach(function(res) {
        console.log(res);
    }, this);
});