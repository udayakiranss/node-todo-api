const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to Connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('593d7d2f52d6c20b40caa59a')
    // },{
    //         $set:{
    //             completed:true
    //         }
    // },{
    //         returnOriginal:false
    // }).then((results)=>{
    //     console.log('Updated Sucessfully',results);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('593d7904e92aeb2fa49f6cfb')
    },{
            $set:{
                name:'Udaya Kiran S S'
            },
            $inc:{
                age:1
            }
    },{
            returnOriginal:false
    }).then((results)=>{
        console.log('Updated Sucessfully',results);
    });

    //db.close();
});