"use strict";
exports.ok = function (values, res) {
  var data = {
    status: 200,
    values: values,
  };

  res.json(data);
  res.end();
};

//response untuk nested matakuliah
exports.oknested = function (values, res) {
  // lakukan akumulasi
  const hasil = values.reduce((akumulasikan, item) => {
    // tentukan key group
    if (akumulasikan[item.nama]) {
      //buat variabel group nama mahasiswa
      const group = akumulasikan[item.nama];
      //cek jika isi array matakuliah
      if (Array.isArray(group.namamakul)) {
        //tambahkan value ke dalam group matakuliah
        group.namamakul.push(item.namamakul);
      } else {
        group.matakuliah = [group.namamakul, item.namamakul];
      }
    } else {
      akumulasikan[item.nama] = item;
    }
    return akumulasikan;
  }, {});
  var data = {
    status: 200,
    values: hasil,
  };

  res.json(data);
  res.end();
};
