const express = require('express');
const mongo = require('mongodb').MongoClient;

const app=express();
const url="mongodb://localhost:27017/ecom";
let db;

app.use(express.json());

mongo.connect(url,(err,client)=>{
    if(err)
        console.error(err);
    db=client.db('ecom');

});

app.get("/sales",(req,res)=>{
    sales=db.collection("sales").find({}).toArray((err,doc)=>{
        if(err)
            console.error(err);
        res.status(200);
        res.send(JSON.stringify(doc))
    });
});

app.get("",()=>{});

app.post("/sales",(req,res)=>{
    const sale=req.body;
    sales=db.collection("sales");
    sales.insertOne(sale,(err,result)=>{
        if(err)
        {
            console.error(err);
            res.status(500).json({err:err});
            return
        }
        console.log(result);
        res.status(200).json({ok:true})

    });

});

app.put("",()=>{});

app.delete("",()=>{});

app.listen(3000,()=>{
    console.log("Server Listening on 3000");
});