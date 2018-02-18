function changeMe(arr) {
var check = " ";
//menggunakan if-else untuk menghindari undefined saat arr.length<1(kosong)
if (arr.length < 1){
  console.log (check);
}else {
var nomor = 0;
//var nomor untuk menghitung nomor object
var nama = '';
//membuat var nama (string) kosong untuk menampung nama
 for (i=0; i < arr.length ; i++){
   //melakukan looping pada array yanng di input
   nomor++;
   // nomor ditambahkan 1 pada setiap perulangan object
   nama = arr[i][0] + ' ' + arr[i][1];
   //mendefinisikan nama pada array
   var person = {};
   //membuat var person untuk menampung object
   person.firstname = arr[i][0];
   person.lastname = arr[i][1];
   person.gender= arr[i][2];
   person.age = arr[i][3];
   //menggunakan if-else untuk mendefinisikan output yang di harapkan
   if (person.age === undefined) {//jika person.age = undefined, maka age akan menampilkan "invalid Birth Year"
     person.age = 'Invalid Birth Year';
   }else{
     person.age = 2018 - arr[i][3];//mendefinisikan person.age sesuai output yang di harapkan
   }console.log (nomor + '.' + nama);
    console.log (person);
  }
 }
}


// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male',]]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
