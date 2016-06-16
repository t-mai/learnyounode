var fs = require('fs');

module.exports = function (dirName, ext, callback) {
    var filter = "." + ext;
    var filelist = [];
    var i = 0;

    fs.readdir(dirName, function (err, list) {
        if (err) {
           return callback(err);
        }

        list.forEach(function(file) {
            if (file.indexOf(filter) > -1) {
                filelist[i] = file;
                i ++;
            }
        }, this);
        return callback(null, filelist);
    });
};