var express = require('express');
var load = require("express-load")
var path = require('path');
let bodyParser = require("body-parser"); //#
let cookieParser = require("cookie-parser"); //#
let expressSession = require("express-session"); //#
let methodOverride = require("method-override");
let error = require("./middlewares/error"); // #!

const KEY = 'pweb.agenda.sid'; //#!
const SECRET = 'super_secreto!'; //#!


let cookie = cookieParser(SECRET); //#!
let store = new expressSession.MemoryStore(); //#!
let mongoose = require('mongoose'); //#!


const app = express();




app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cookieParser('pweb2'));
app.use(expressSession()); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
/* app.use(express.static(path.join(__dirname, "public"))); */
app.use(express.static("public"));
load("models").then("controllers").then("routes").into(app);
app.use(error.notFound);
app.use(error.serverError);

//Local host não funciona com o node 17+
const mongoDB = "mongodb://0.0.0.0:27017/CinemaBlessed";
mongoose.connect(mongoDB, { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(express.static(path.join(__dirname, '/public/')));



app.listen(3000,function(){
  console.log('http://localhost:3000/')
})



module.exports = app;
