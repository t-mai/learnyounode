var http = require('http');
var bl = require('bl');
var responses = [];
var count = 0;

function printAll () {
  for (var i = 0; i < 3; i++)
    console.log(responses[i]);
}

function getData(i) {
  http.get(process.argv[2 + i], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err);
      responses[i] = data.toString();
      count++;
      if (count == 3)
        printAll();
    }));
  });
}

for (var i = 0; i < 3; i++) {
    getData(i);
}
  