const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id:10
};

var token = jwt.sign(data,'123abc');
console.log(token);
var decoded = jwt.verify(token,'123abca');
console.log('decoded',decoded);

var message  = 'Testing SHA256 hashing';
var hash = SHA256(message).toString();
console.log(`Message = ${message}`);
console.log(`Hash = ${hash}`)