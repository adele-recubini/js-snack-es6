// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore


 var biciclette = [
    {
      'nome': 'bianchi',
      'peso': 15,

   },


    {
    'nome': 'masciarelli',
    'peso': 8,

  },

  {
    'nome': 'rossi',
    'peso': 20,

 },

];

// per capire quale bici pesa di meno dobbiamo comprarare gli oggetti all interno dell array . io vedrò la prima bicicletta e per me quella sara da comparare con le altre quindi bicicletta leggera sara la mia bianchi  e poi prendo la proprietà peso e la comparo

var biciLeggera = biciclette[0]
for (var i = 0; i < biciclette.length; i++) {
  if (biciclette[i].peso <  biciLeggera.peso) {
    biciLeggera = biciclette[i]
  }
}
console.log(biciLeggera);



// var pesata = 8
// for (var i = 0; i < biciclette.length; i++) {
//
//    for (var key in biciclette) {
//      console.log(biciclette[i]['peso']);
//      var pesi = biciclette[i]
//    }
//    console.log(pesi.peso);
//    if (pesi.peso === pesata) {
//     console.log(pesi.peso);
//    }

// }
