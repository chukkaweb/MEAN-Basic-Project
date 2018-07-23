var express =require("express");
var mysql = require('mysql');
var bodyparser =require('body-parser');
var app = express();
app.use(bodyparser.json());// send the json as mime type;
app.use(bodyparser.urlencoded({extended:false}))
//CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
var login= require('../login/login');
app.use = ('/login',login);
app.listen(8080);
console.log("server listenig port number");
