//Set up MySQL connection
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "burgers_db"
});

//Actually Make connection
connection.connect(function(err) {
  if (err) {
    console.log("error connecting: " + err.stack);
    return;
  }
  console.log("Connected as id: " + connection.threadId);
});

//Exports connection for our ORM to use.
module.exports = connection;
