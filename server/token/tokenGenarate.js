var jwt =require('jwt-simple');//used to genrate the token based authentiction
module.exports=function(uname,upwd){
    return jwt.module({'uname' : uname,'upwd' : upwd,password})// password meeans its password type
}
