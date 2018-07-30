var express =require("express");
var bodyparser =require('body-parser');
var app = express();
//CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyparser.json());// send the json as mime type;
app.use(bodyparser.urlencoded({extended:false}));
var login = require('./login/login');
 app.use = ('/login',login);
var mysql=require('./mysql/mysql');
 app.use=('/mysql', mysql);
var mongodb =  require ('./mongodb/mongodb');
app.use =('/mongodb',mongodb);
var static =require('./static/static');
app.use = ('/static',static);
app.listen(8080);
console.log("server listening port number");
