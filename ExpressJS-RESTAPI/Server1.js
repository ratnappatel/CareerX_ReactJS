var express = require('express');
var app = express();

// Get MongoClient
var MongoClient = require('mongodb').MongoClient;

// db url, collection name and db name
const dburl = 'mongodb://localhost:27017';
const dbname = 'ecom';
const collname = 'sales';


app.get('/sales', function(req, res) {

    // connect to DB
    MongoClient.connect(dburl, function(err, client) {
      if (!err) {
  
        // Get db
        const db = client.db(dbname);
  
        // Get collection
        const collection = db.collection(collname);
        console.log(collection);
        // Find all documents in the collection
        collection.find({}).toArray(function(err, sales) {
          if (!err) {
  
            // write HTML output
            var output = '<html><body>';
            output += '<h1>List of Sales</h1>';
            output += '<table border="1"><tr><td><b>' + 'ID' + '</b></td><td><b>' 
            + 'Item' + '</b></td><td><b>'+'Price'+'</b></td><td><b>'+'Quantity'+'</b></td></tr>';
  
            // process todo list
            sales.forEach(function(sale){
              output += '<tr><td>' + sale._id + '</td><td>' + sale.item + '</td>'+
              '<td>'+sale.price+'</td><td>'+sale.quantity+'</td><td>'+sale.description+'</td></tr>';
            });
  
            // write HTML output (ending)
            output += '</table></body></html>'
  
            // send output back
            res.send(output);
  
            // log data to the console as well
            console.log(todos);
          }
        });
  
        // close db client
        client.close();
      }
    });
  });

  app.listen(3000,()=>{
    console.log("Server Listening on 3000");
});