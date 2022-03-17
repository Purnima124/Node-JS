var fs=require('fs')
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Purnima@123",
    database: "mydb"
    });
console.log("welcome to login and sign up page")
var a=require("readline-sync")
var user=a.question("what u want to do login or sign up:")
    if (user=="signup"){
        var user_name=a.question("enter the user_name :")
        var password1=a.question("enter ur password:")
        if (password1.match(/[A-Z]/m) && password1.match(/[a-z]/m) && password1.match(/[0-9]/m) &&  password1.match(/[$#&@]/m)){
            var password2=a.question("confirm ur password:")
            if (password1==password2){
                console.log("congrates")
                var description=a.question("enter ur descriptinon:")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                var dob=a.question("enter ur dob:")
                var hobbies=a.question("enter ur hobbies:")
                var gender=a.question("enter ur gender f/m :")
                console.log("congrates",user,"u r sucessfully signupped")
                con.connect(function(err) {
                if (err) throw err;
                console.log("Connected!");
                // var sql = "CREATE TABLE details (name VARCHAR(255), password VARCHAR(255),describtion VARCHAR(255),DOB VARCHAR(255),Hobbies VARCHAR(255),Gender VARCHAR(255))";
                // con.query(sql, function (err, result) {
                //     if (err){ 
                    var sql = "INSERT INTO details (name, password,describtion,DOB,Hobbies,Gender) VALUES ?";
                      var values = [[user_name,password1,description,dob,hobbies,gender]]
                        con.query(sql,[values], function (err, result) {
                          if (err){
                              console.log("Error while inserting")
                            throw err
                          }else{
                            console.log("You are signup succesfully.... : ",result.affectedRows); 
                          }
                        });
                    // }else{
                    //     console.log("Table created")
                    // }
                    //   });
                
                });
            }
            else{
                console.log("Passwords didn't match.")
            }   
        }
        else{
            console.log("weak password")
        }
    }
    else{  
        if(user=="login"){
            var Name=a.question("enter the usre_name ")
            var Password=a.question("enter the password ")
            con.connect(function(err){
                var name=Name;
                var password=Password;
                var sql="SELECT * FROM details WHERE name=? OR password=?";
                con.query(sql,[name,password],function (err, result) {
                if (!password){
                    console.log("username and password not matched.");
                }else{
                  console.log("congrates",result,"you have logged in sucessfully")
                }
                })
            });
        }
        else{
            console.log("your information is rong")
        }
    }

    