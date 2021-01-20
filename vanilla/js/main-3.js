// VANILLA


// jsnack 3
// Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
//


// creo una funzione che accetti tre argomenti


 var numeriConArray = [1,2,3,4,5,6,7,8,9,10];
 var a = 3;
 var b = 9;


function array(arr,min,max) {
  var nuovoArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (i > min && i < max) {
      nuovoArray.push(arr[i])
    }
  }
  return nuovoArray;
}


console.log(array(numeriConArray,a,b));

// function myArray() {
//   var array = [];
//   for (var i = 0; i < 10; i++) {
//   array.push(i)
//
//   }
//
//   return array;
// }
//
// var array= myArray()
// console.log(array);
//
// function myNumber(){
//   var numero = 3
//   return numero
// }
//
// var a = myNumber()
// console.log(a);
//
// function mySecondNumber() {
//   var numero = 8
//   return numero;
// }
// var b = mySecondNumber()
// console.log(b);
