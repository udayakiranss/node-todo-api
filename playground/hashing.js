const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123456';

// bcrypt.genSalt(10,(err,salt)=>{
//     bcrypt.hash(password,salt,(err,hash)=>{
//         console.log('hash:',hash);
//     })
// });

var hashedPassword = '$2a$10$TZGffdl.nTy7jqLqK3Xt2.QBtq93cwNF2rFByFwwj2LhjTzgU0szi';

bcrypt.compare(password,hashedPassword,(err,res)=>{
    console.log(res);
});


// var data = {
//     id:10
// };

// var token = jwt.sign(data,'123abc');
// console.log(token);
// var decoded = jwt.verify(token,'123abca');
// console.log('decoded',decoded);

// var message  = 'Testing SHA256 hashing';
// var hash = SHA256(message).toString();
// console.log(`Message = ${message}`);
// console.log(`Hash = ${hash}`)