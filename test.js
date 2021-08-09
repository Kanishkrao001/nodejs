// Step 1
// load the http module in a variable using require keyword
var http = require("http");
const express = require("express");
var app = express(); // creating a obj of the express module so that we can use the function
const sql = require('mysql');
const bparser = require('body-parser');

app.use(bparser.json());

var conn = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "training_laravel_kanishk"
});

// Step 2
// create the connection with a server
// http.createServer(function (request, response){

//     response.writeHead(200, {'Content-Type' : 'text/plain'});
 
//     response.end('Studying Node Js ');     
// }).listen(8081);

// console.log("Node Js starts");

conn.connect(function(err){
      if(err){
          console.log("Connection failed :" + JSON.stringify(err,undefined,2));
      }
});

app.route('/').get(function(req,res){
    res.send("tutorial started");
});

app.route('/node').get(function(req,res){
    res.send("Tutorial on NodeJs");
});

app.get('/user' , function(req,res) {
   
        // console.log("connected...");
        conn.query("select * from users", function(err,result,fields){
            if(!err){
                res.send(result);
            }
            else{
                console.log(err);
            }
        });
});

app.get('/user/:id' , function(req,res){
    var id = req.params.id;
    // console.log(id);
    conn.query("select * from users WHERE id = " + id , function(err,result,fields){
        if(!err){
        res.send(result);
        }
        else
        console.log(err);
    })
});
    
app.delete('/user/delete/:id', function(req,res){
    var id = req.params.id;
    console.log(id);
    // conn.query('DELETE from customers WHERE id = ' + id, function(err,result,fields){
    //     if(!err)
    //     res.send("Deleted Successfully id : " + id);
    //     else
    //     console.log(err);
    // })
})

var server = app.listen(8001, function() {});
