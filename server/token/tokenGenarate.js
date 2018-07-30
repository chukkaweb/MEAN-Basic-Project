var jwt =require('jwt-simple');//used to genrate the token based authentiction
module.exports = function(arg1,arg2,password){
    return jwt.encode({'uname':arg1,'upwd':arg2},
                      password);
};