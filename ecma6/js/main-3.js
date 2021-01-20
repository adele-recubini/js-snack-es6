// ECMA6
// jsnack 3
// Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri


const arrayDiNumeri = [1,2,3,4,5,6,7,8,9,10];
const a = 3
const b = 9

function myFunction(arr,min,max) {
  const newArray =[];
  // ora uso il for each

  arr.forEach((element, index) => {
    if (index > min && index < max) {
      newArray.push(element);
    }
  });
  return newArray;
}

console.log(myFunction(arrayDiNumeri,a,b));
