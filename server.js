var express = require('express');

var app = express();

app.get('/', function(request, res){
    res.send("My first API !!!");
});

app.get('/funions', function(req, res){
    res.send("Yo give me some funions bro!!!");
});

app.get('/wert', function(request, response){
    response.send("My first wert-API !!!");
});

app.listen(8000, function(){
    console.log("First API running at port 8000");
});