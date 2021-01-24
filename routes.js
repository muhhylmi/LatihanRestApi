"use strict";

module.exports = function (app) {
  var jsonku = require("./controller");

  app.route("/").get(jsonku.index);

  app.route("/tampil").get(jsonku.tampilDataSemua);
  app.route("/tampil/:id").get(jsonku.tampilBerdasarId);
  app.route("/tambah").post(jsonku.tambahDataMahasiswa);
  app.route("/ubah").put(jsonku.ubahDataMahasiswa);
  app.route("/hapus").delete(jsonku.deleteMahasiswa);

  app.route("/tampilMatakuliah").get(jsonku.mataKuliahGroup);
};
