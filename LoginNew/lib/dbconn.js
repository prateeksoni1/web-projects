var mysql        = require('mysql');

var connection   = mysql.createConnection({

  supportBigNumbers: true,

  bigNumberStrings: true,

  host     : "localhost",

  user     : "root",

  password : "1234",

  database : "login"

});

module.exports = connection;