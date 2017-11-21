const fs = require('fs');

var readMe = fs.readFileSync('code.txt','utf8');
console.log(readMe);
