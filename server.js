var express = require('express');
var app = express();
var path = require("path");
var mysql = require('mysql');

app.use(express.static("public"));

var methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
// app.set('views','./views');

//you need this to be able to process information sent to a POST route
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "friend_finder_db"
});

app.get('/', function(req, res, next){
    res.render('../views/pages/index');
  });

app.get('/useranswers', function(req, res){
    connection.query('SELECT * FROM user_answers', function (error, results, fields) {
        if (error) throw error;
    
        res.json(results);
    });
});

app.post('/submitanswers', function(req, res){
	// console.log(req.body);

    connection.query(
        "INSERT INTO user_answers SET ?",
        [req.body],
        function(error, results, fields) {
        if (error) throw error;
        res.render('../views/pages/userresult');
        }
    );
});







app.listen(3000, function(){
	console.log('listening on 3000');
});


