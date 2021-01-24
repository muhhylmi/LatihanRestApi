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

exports.tambahDataMahasiswa = function (req, res) {
  var nim = req.body.nim;
  var nama = req.body.nama;
  var jurusan = req.body.jurusan;

  connection.query(
    "insert into mahasiswa (nim, nama, jurusan) values (?,?,?)",
    [nim, nama, jurusan],
    function (error, rows, fileds) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Menambahkan Data", res);
      }
    }
  );
};

// mengubah data berdasarkan id

exports.ubahDataMahasiswa = function (req, res) {
  var id = req.body.id_mahasiswa;
  var nim = req.body.nim;
  var nama = req.body.nama;
  var jurusan = req.body.jurusan;

  connection.query(
    "update mahasiswa set nim =?, nama=?, jurusan=? where id_mahasiswa=?",
    [nim, nama, jurusan, id],
    function (error, rows, fileds) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Mengubah Data", res);
      }
    }
  );
};

exports.deleteMahasiswa = function (req, res) {
  var id = req.body.id_mahasiswa;
  connection.query(
    "delete from mahasiswa where id_mahasiswa=?",
    [id],
    function (error, rows, fileds) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Hapus Data", res);
      }
    }
  );
};

// menampilkan mata kuliah group
exports.mataKuliahGroup = function (req, res) {
  connection.query(
    "SELECT mahasiswa.id_mahasiswa, mahasiswa.nama, mahasiswa.nim, mahasiswa.jurusan, matakuliah.namamakul, matakuliah.sks FROM krs JOIN mahasiswa JOIN matakuliah WHERE krs.id_matakuliah = matakuliah.id_matakuliah AND krs.id_mahasiswa = mahasiswa.id_mahasiswa ORDER BY mahasiswa.id_mahasiswa",
    function (error, rows, fileds) {
      if (error) {
        console.log(error);
      } else {
        response.oknested(rows, res);
      }
    }
  );
};
