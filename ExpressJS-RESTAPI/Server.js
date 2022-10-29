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

app.get("/sales/:id",(req,res)=>{
    
    const id=req.params.id;
    var o_id = new mongo.ObjectID(id);
    sale=db.collection("sales").find({"_id":o_id});
    res.send(sale);
});

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

app.put("/sales/:id",(req,res)=>{
    
    if(!req.body)
    {
        return res.status(400).send({message:"new Data to be update can not be blank.."});
    }
    const id=req.params.id;

    const item=req.body.item;
    const price=req.body.price;
    const quantity=req.body.quantity;
    const date=req.body.date;
    db.collection("sales").updateOne({"_id":id},{$set: {"item":item,"price":price,"quantity":quantity,"date":date}})
    .then(data=>{
        res.status(200).send({message: "Record update successfully.."});
    }); 
});

app.delete("/sales/:id",(req,res)=>{
    const id=req.params.id;
    db.collection("sales").remove({"_id":id})
    .then((data)=>{

        if(!data)
           res.status().send({message: "Can not fine record with id : "+id+" to be deleted.."});
        else
            res.status(200).send({message:"Record with id "+id+" deleted successfully.."});
    });
});

app.listen(3000,()=>{
    console.log("Server Listening on 3000");
});