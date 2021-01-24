"use strict";
exports.ok = function (values, res) {
  var data = {
    status: 200,
    value: values,
  };

  res.json(data);
  res.end();
};
