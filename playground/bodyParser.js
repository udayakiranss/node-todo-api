var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=> {
   console.log(req.body);
});



app.listen(3000, ()=>{
 console.log('Starting on port 3000');
});