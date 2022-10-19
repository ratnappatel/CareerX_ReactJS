var express=require('express');
var cors=require('cors');

var app=express();
app.use(cors());

// REST -Endpoint
app.get('/',function(req,res){
    res.setHeader('content-type','text/plain');
    res.send('Hello World');
});

app.post('/',function(req,res){
    res.send('I am called by Post : Hello Everyone');
});

var server =app.listen(8082,function(){
    var host=server.address().address;
    var port=server.address().port;
    console.log("Hello World Express Application listening at http:// %s : %s",host,port);
})