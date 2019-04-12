function naikAngkot(arrPenumpang) {
  var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var penumpang_bayar = [];
  for (var x = 0; x < arrPenumpang.length; x++) {
    var satu = {};
    satu.penumpang = arrPenumpang[x][0];
    satu.naikDari = arrPenumpang[x][1];
    satu.tujuan = arrPenumpang[x][2];
    // calculate bayar
    var naikDari;
    var tujuan;
    for (var y = 0; y < rute.length; y++) {
      if (satu.naikDari == rute[y]) {
        naikDari = y;
      } else if (satu.tujuan == rute[y]) {
        tujuan = y;
      }
    }
    var harga = (tujuan - naikDari) * 2000;
    satu.bayar = harga;
    penumpang_bayar.push(satu);
  }
  return penumpang_bayar;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]