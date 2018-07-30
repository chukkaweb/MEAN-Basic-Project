var db_prop= ("../dbconfig/db_properties");
var express =require("express");
var mongodb=require('mongodb');
var mClient =mongodb.MongoClient;
var router  = express.Router();
router.post('/', function(req,res){
var token = req.body.token;
if(token==db_prop.token){
    mClient.connect("mongodb://localhost:27017/sampleproject",function(err,db){
        db.collection("products").find().toArray(function(err,array){
            res.send(array);
        });
    });
}
else{
    res.send("unautherised user");
}
});