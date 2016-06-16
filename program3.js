var fs = require('fs');
var filePath = process.argv[2];

var content = fs.readFileSync(filePath).toString();

console.log(content.split('\n').length -1);
