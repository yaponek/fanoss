var express = require('express');
var app = express();

var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

var con = mysql.createConnection({
    host:'127.0.0.1',
    port: '443',
    user: 'root',
    password: '',
    database: 're_credit_ms'
});

var server = app.listen(4040, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("start"+host+'<===>'+port);

});

con.connect(function(error) {
    if(error){
        console.log(error+' <== Error Report');
    }else{
        console.log("connected");
    }
});

app.get('rexuser', function(req, res){
    con.query('SELECT * FROM rexuser', function(error, rows, fields){
        if(error) {
            console.log(error);
        }else{
            console.log(rows);  
            res.send(rows);  
        }
    });
});

