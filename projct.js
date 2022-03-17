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
  var sql = "INSERT INTO details (name,password,escription,dob,gender) VALUES ?";
  con.query(sql, function (err, result) {
    if (err) throw err;
    // console.log("1 record inserted");
  });
});