var mysql = require('mysql');
var db = require('./db_properties');
module.exports = {
getConncetion: function(){
    return mysql.createConnection({
        host:db.host,
        user:db.user,
        password:db.password,
        database:db.database
});
}
};