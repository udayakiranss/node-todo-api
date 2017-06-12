const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to Connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    // Delete Many

    // db.collection('Todos').deleteMany({text:'Udemy Exercise'}).then((results) => {
    //     console.log('Deleted documents sucessfully',results.result);
    // },(err)=>{
    //     if(err){
    //         console.log('Not able to delete the documents');
    //     }
    // });

    // Delete one

    // db.collection('Todos').deleteOne({text:'delete one'}).then((results) => {
    //     console.log('Deleted documents sucessfully',results.result);
    // },(err)=>{
    //     if(err){
    //         console.log('Not able to delete the documents');
    //     }
    // });

    //FindOne and delete

    // db.collection('Todos').findOneAndDelete({completed:false}).then((results) => {
    //     console.log('Deleted documents sucessfully',results);
    // },(err)=>{
    //     if(err){
    //         console.log('Not able to delete the documents');
    //     }
    // });

    // Delete Many

    db.collection('Users').deleteMany({name:'123'}).then((results) => {
        console.log('Deleted documents sucessfully',results.result);
    },(err)=>{
        if(err){
            console.log('Not able to delete the documents');
        }
    });

    //db.close();
});