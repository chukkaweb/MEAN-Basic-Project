var db_prop= ("../dbconfig/db_properties");
var conn = require("../dbconfig/db_conncetion");
var connection = conn.getConnection();
connection.connect();
var express = require("express");
var router = express.Router();
router.post('/', function(req,res){
var token = req.body.token;
if(token==db_prop.token){
    connection.query("select * from student_details",function(err,recordsArray,fields){
        res.send(recordsArray);
    })
    }
else{
    res.send("unautherised user");
}
});
module.exports=router;