const fs = require('fs');

var readMe = fs.readFileSync('code.txt','utf8');

fs.mkdir('Project',function() {
fs.writeFileSync('./Project/ReadMe.txt',readMe);
});

console.log(readMe);
