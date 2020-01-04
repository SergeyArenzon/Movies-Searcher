
var express = require('express');
var app = express();
var path = require('path');
var request = require('request');

app.use(express.static(__dirname + '/public'));
// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.render("search.ejs");
});
app.get('/results', function(req, res) {

    var my_search ="http://www.omdbapi.com/?s="+ req.query.search+"&apikey=thewdb";

    request(my_search,function(error,response,body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("results.ejs", {data:data});
     
        }
       
    })
});

app.listen(8080,function(){
    console.log("Server is running!");
});