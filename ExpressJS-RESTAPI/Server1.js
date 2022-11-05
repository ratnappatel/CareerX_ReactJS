const {MongoClient} =require('mongodb');
const express = require('express');
const url='mongodb://localhost:27017';
const client=new MongoClient(url);

const app=express();
app.use(express.json());
const dbName='ecom';

async function main(){
  await client.connect();
  console.log('Connected to Database...');
  const db=client.db(dbName);
  const collection=db.collection('sales');
  return 'done';
}
main()
.then(console.log)
.catch(console.error)
.finally(()=>client.close());

