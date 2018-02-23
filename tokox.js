// Problem
// Toko X yang sedang melakukan SALE ingin menghitung jumlah profit untuk setiap jenis barang yang terjual pada hari itu.

// Barang-barang SALE yang akan dihitung penjualannya:

// Sepatu brand Stacattu seharga 1500000 dan stock barang yang tesedia 10
// Baju brand Zoro seharga 500000 dan stock barang yang tesedia 2
// Sweater brand Uniklooh seharga 175000 dan stock barang yang tersedia 1

// Function akan menerima array yang berisikan object pembeli (nama pembeli, barang yang ingin dibeli dan jumlah barang yang dibelinya). Jika stock barang kurang dari jumlah yang ingin dibeli oleh pembeli maka pembeli batal untuk membeli barang tersebut.

// Function countProfit akan mengembalikan/me-return sebuah array of object dimana array tersebut berisi objek-objek barang dari toko X tersebut yang berisikan info nama barang, siapa saja yang membeli, sisa stock barang dan total pemasukan untuk barang tersebut


// var result = [];


//   for(let i = 0; i < shoppers.length; i++){

//       var objectBaru= {};
//       objectBaru.product = '';
//       objectBaru.shoppers = [];
//       objectBaru.leftOver = 0;
//       objectBaru.totalProfit = 0;

//       for (let j = 0; j < listBarang.length; j++){

//         if(shoppers[i].product == listBarang[j][0] ) {
//           objectBaru.product += shoppers[i].product;
//           objectBaru.shoppers.push(shoppers[i].name);
//           objectBaru.leftOver = listBarang[j][2] - shoppers[i].amount;
//           objectBaru.totalProfit = shoppers[i].amount * listBarang[j][1];

//         }else if(shoppers[i].product == listBarang[j][1] ) {
//           objectBaru.product += shoppers[i].product;
//           objectBaru.shoppers.push(shoppers[i].name);
//           objectBaru.leftOver = listBarang[j][2] - shoppers[i].amount;
//           objectBaru.totalProfit = shoppers[i].amount * listBarang[j][1];

//         }

//       }

//       result.push(objectBaru);

function countProfit(shoppers) {
  let listBarang = [['Sepatu Stacattu', 1500000, 10],
                    ['Baju Zoro', 500000, 2],
                    ['Sweater Uniklooh', 175000, 1]
                  ];
  //buat variable tampung array
  var result = [];
//buat variable barang yang tersedia
  var ssepatu = listBarang[0][2];
  var sbaju = listBarang[1][2];
  var sunik = listBarang[2][2];
  //buat variable untuk menampung konsumen, barang sisa dan profit
  var konsumen;
  var leftOver;
  var pemasukan;
//buat variable menampung nama konsumen
  var konsepatu = [];
  var konbaju = [];
  var konunik = [];

  //looping untuk shoppers
  for (let i = 0; i < shoppers.length; i ++){
    if (shoppers[i].product == 'Sepatu Stacattu' && ssepatu >= shoppers[i].amount
    /*jika shoppers adalah 'sepatu stacattu' dan stok barang lebih atau sama dengan permintaan pembeli, maka barang bisa di beli */){
      konsepatu.push(shoppers[i].name);
      ssepatu -= shoppers[i].amount;
    }else if (shoppers[i].product == 'Baju Zoro' && ssepatu >= shoppers[i].amount){
      konbaju.push(shoppers[i].name);
      sbaju -= shoppers[i].amount;
    }else if (shoppers[i].product == 'Sweater Uniklooh' && sunik >= shoppers[i].amount){
      konunik.push(shoppers[i].name);
      sunik -= shoppers[i].amount;
    }
  }


  //looping untuk listBarang
  for (let j = 0; j < listBarang.length; j++){
    if (listBarang[j][0] == 'Sepatu Stacattu'){
      konsumen = konsepatu;/*untuk menampung nama konsumen*/
      leftOver = ssepatu;/*untuk menampung barang sisa*/
      pemasukan = listBarang[j][1] * (listBarang[j][2] - ssepatu);
      /*total profit adalah hasil dari harga barang di kalikan dengan hasil pengurangan dari stock barang yang di looping dan stok barang yang diminta */
    }else if (listBarang[j][0] == 'Baju Zoro'){
      konsumen = konbaju;
      leftOver = sbaju;
      pemasukan = listBarang[j][1] * (listBarang[j][2] - sbaju);
    }else if (listBarang[j][0] == 'Sweater Uniklooh'){
      konsumen = konunik;
      leftOver = sunik;
      pemasukan = listBarang[j][1] * (listBarang[j][2] - sunik);
    }
    //membuat variable object baru untuk menampung dan membuat output sesuai dengan yang di minta.
var obj = {};
  obj.product = listBarang[j][0];
  obj.shoppers = konsumen;
  obj.leftOver = leftOver;
  obj.totalProfit = pemasukan;
  result.push(obj);//memasukkan object baru ke dalam variable result array yang telah di buat.


  }








  return result;


}


// TEST CASES
console.log(countProfit([
      {name: 'Windi', product: 'Sepatu Stacattu', amount: 2},
      {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3},
      {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([
  {name: 'Windi', product: 'Sepatu Stacattu', amount: 8},
  {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10},
  {name: 'Rani', product: 'Sweater Uniklooh', amount: 1},
  {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [ 'Windi' ],
// //     leftOver: 2,
// //     totalProfit: 12000000 },
// //   { product: 'Baju Zoro',
// //     shoppers: [ 'Devi', 'Lisa' ],
// //     leftOver: 0,
// //     totalProfit: 1000000 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [ 'Rani' ],
// //     leftOver: 0,
// //     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [],
// //     leftOver: 10,
// //     totalProfit: 0 },
// //   { product: 'Baju Zoro',
// //     shoppers: [],
// //     leftOver: 2,
// //     totalProfit: 0 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [],
// //     leftOver: 1,
// //     totalProfit: 0 } ]
// console.log(countProfit([])); //[]
