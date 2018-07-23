var express = require("express");
var jwt = require("jwt-simple");
var conn =require('../dbconfig/db_conncetion')
var t_genarate =require('../token/tokenGenarate');
var connection = conn.getConncetion();
connection.connect();
var router = express.Router();//Create rest api
router.post('/',function(req,res){
var uname=req.body.uname;
var upwd=req.body.upwd;
connection.query("select * from login where uname ='"+uname+"' and upwd='"+upwd+"'",(err,recordArray,fields)=>{
if(recordArray.length>0){
    var token =jwt.encode({'uname':uname,'upwd':upwd},'chukka@co.in');
    conn.token=token;
    res.send({login:"success",token:token});
}
else{
    res.send({login:'fail'});
}
});
});
exports.modules=router;