////Bilangan Prima


function angkaPrima(bil){
var prima=false;

for (i=2; i<=bil; i++){
 if(i>=2){
    prima =true;
    for(j=2; j<i; j++){
       if(i%j === 0){
          prima=false;
       }
    }
 }
  if(prima===true){

 }
}return prima;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
