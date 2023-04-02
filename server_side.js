/*
const express = require("express");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//
app.get("/path", function(req,res){
      res.send("online");
});

app.post("/path", function(req, res){
  console.log("dsjhfksdj");
  //res.send('Value received');
});

app.listen(3000);


const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/path', (req, res) => {
    const value = req.body.value
    console.log(value)
    //res.send('Value received')
});

app.listen(3000, () => {
    console.log('Server running on port 3000')
});

//////////////////////////////////////////


var http = require('http');
var server = http.createServer(function (req, res) {
    if (req.method === 'POST' && req.url === '/post_data') {
        let body = '';
        req.on('data', function (data) {
            body += data;
        });
        req.on('end', function () {
            console.log(body);
            res.end('ok');
        });
    } else {
        res.end('Not Found');
    }
});

server.listen(80);
console.log("Server is listening");*/

const express = require("express");

const app = express();

var curr_temperature='12';

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {


  if (req.url === '/') {

    fs.readFile('html&css/index.html', (err, data) => {

      if (err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Error loading index.html');
      }
       else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      }

    });
  }

  if(req.url === '/value'){

    const value = 12; // the value you want to send
    res.end(curr_temperature);

  }
  
  if (req.method === 'POST' && req.url === '/post_data') {
        let body = '';
        req.on('data', function (data) {
            body += data;
        });
        req.on('end', function () {

           console.log(body);

           curr_temperature = body;// the value pass to res.end should be a string;
           //res.end('ok');
        });
    }

});



server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
