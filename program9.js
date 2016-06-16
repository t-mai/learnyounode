var http = require('http');
var bl = require('bl');

var result = [];
var urls = process.argv.slice(2);
urls.forEach(function(url, i) {
  http.get(url, function(response) {
    response.pipe(bl(function(err, data) {
      if (err) return console.error(err);
      result[i] = data.toString();
      if (i === urls.length - 1) {
        console.log(result.join('\n'));
      }
    }));
  });
});