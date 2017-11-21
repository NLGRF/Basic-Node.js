var response = require('./method');

console.log(response.update());
console.log(response.pi);
console.log(response.data);
response.data.deleteUser();
