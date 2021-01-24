"use strict";

var response = require("./res");
var connextion = require("./koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi Rest Api jalan");
};
