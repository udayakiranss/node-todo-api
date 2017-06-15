var {mongoose} = require('../server/db/mongoose');
var {User} = require('../server/models/user');


const id = '594030ccb604c741ced55e13';

User.findById(id).then((user)=>{
    if(!user){
        return console.log('Not a valid user')
    }
    console.log(JSON.stringify(user,undefined,2));
}).catch((e)=>{
    console.log(e);
});