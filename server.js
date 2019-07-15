//Task- 8b,c
var http = require('http');
var express = require('express')
var app = express ();
//var fs = require('fs'); //used in 8a
var server = http.Server(app);
var bodyParser= require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var dummyArticle ={
  title:"Test article from server",
  content: "Test content for this article"
}

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
  //8c
  app.get('/form', function(req, res){
    res.sendFile(__dirname+'/form.html')
  })

  //ejs to send on console
  app.get('/article', function(req, res){
    res.render('article.ejs', {article:dummyArticle})
  })

  app.get('/about/second', function(req, res){
    res.sendFile(__dirname+'/second.html')
  })
  app.post('/article/new', function(req, res){
    console.log(req.body)
    res.send({message:"data received"})
  })
  server.listen(3000, 'localhost', function(){
    console.log('Server running');
  });