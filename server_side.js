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
});*/

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
console.log("Server is listening");
