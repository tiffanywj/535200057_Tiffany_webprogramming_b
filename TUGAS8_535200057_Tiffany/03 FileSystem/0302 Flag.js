var fs = require("fs");

console.log("Going to open file!");
fs.open('input.txt', 'rt', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("file opened successfully!");
});