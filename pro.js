var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Purnima@123",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
//   var sql = "CREATE TABLE facebook (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
var sql = "CREATE TABLE details (name VARCHAR(255), password VARCHAR(255),description VARCHAR(255), dob VARCHAR(255), gender VARCHAR(255))";
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
}); 

