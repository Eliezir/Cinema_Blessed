var express = require('express');
var load = require("express-load")
var path = require('path');
let bodyParser = require("body-parser"); //#
let cookieParser = require("cookie-parser"); //#
let expressSession = require("express-session"); //#
let methodOverride = require("method-override");
let error = require("./middlewares/error"); // #!



var app = express();





app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cookieParser('pweb2'));
app.use(expressSession()); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

load("models").then("controllers").then("routes").into(app);
app.use(error.notFound);
app.use(error.serverError);






app.use(express.static(path.join(__dirname, '/public/')));

load('models')
.then('controllers')
.then('routes')
.into(app);

app.listen(3000,function(){
  console.log('http://localhost:3000/')
})



module.exports = app;
