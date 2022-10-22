const express = require('express');
const mongo = require('mongodb').MongoClient;

const app=express();
const url="mongodb://localhost:27017/ecom";
let db,sales;

app.use(express.json());

mongo.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
},
(err,client)=>{
    if(err)
    {
        console.log(err);
        return;
    }
    db=client.db("ecom");
   console.log('Sales Database Connected..');
    sales=db.collection("sales");
    console.log(sales);
   
});



app.get("/sales",(req,res)=>{
    sales=db.collection("sales")
    res.status(200);
    res.send(sales);
});

app.get("",()=>{});

app.post("",()=>{});

app.put("",()=>{});

app.delete("",()=>{});

app.listen(3000,()=>{
    console.log("Server Listening on 3000");
});