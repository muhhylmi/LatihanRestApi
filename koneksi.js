var mysql = require("mysql");

// buat koneksi database
conn = mysql.createConnection({
  host: localhost,
  user: "root",
  pass: "",
  database: "latihanrestapi",
});

conn.connect((error) => {
  if (error) throw error;
  console.log("My SQL terkoneksi");
});

module.exports = conn;
