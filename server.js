
var fs = require("fs");
var cnf = JSON.parse(fs.readFileSync("config.json"));

var express = require("express");

var app = express();

app.use(app.router);
app.use(express.static(__dirname + "/public"));


app.get("/", function(req, res){
        res.send("root of the server");
});

app.listen( cnf.port, cnf.host );



