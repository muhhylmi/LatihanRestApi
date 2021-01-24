"use strict";

var response = require("./res");
var connection = require("./koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi Rest Api jalan", res);
};

// menampilkan semua mahasiswa
exports.tampilDataSemua = function (req, res) {
  connection.query("select * from mahasiswa", function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

exports.tampilBerdasarId = function (req, res) {
  let id = req.params.id;
  connection.query(
    "select * from mahasiswa where id_mahasiswa = ?",
    [id],
    function (error, rows, fileds) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};
