//Task- 8b,c
var http = require('http');
var express = require('express')
var app = express ();
//var fs = require('fs');
var server = http.Server(app)
//(8a)
  // var server = http.createServer(function(req, res){
  //   res.statusCode = 200;
  //   res.setHeader('Content-Type', 'text/html');
  //   fs.readFile('index.html',function(err,data){
  //     if(err){
  //       return console.log("File not found")
  //     }
  //     res.end(data);
  //   })
  // });
  app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html')
  })
  // app.get('/about/:id', function(req, res){
    //if(req.params){
      //res.json({key:'value'})
    //}
  //   res.sendFile(__dirname+'/index.html')
  // })
  app.get('/about/second', function(req, res){
    res.sendFile(__dirname+'/second.html')
  })
  server.listen(3000, 'localhost', function(){
    console.log('Server running');
  });