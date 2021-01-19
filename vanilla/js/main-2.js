// snack 2 vanilla
// snack 2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti
// Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// funzione che mi genera numeri random


function randomNum(min, max) {
  return Math.floor(Math.random() * (max  - min) + 1) - min;
}


 var squadre = [
    {
      'nome': 'juve',
      'punti' : 0,
      'falli' : 0,

   },

    {
    'nome': 'inter',
    'punti' : 0,
    'falli' : 0,

  },

  {
   'nome': 'milan',
   'punti' : 0,
   'falli' : 0,

 },

];

for (var i = 0; i < squadre.length; i++) {
  // creo una variabile che è uguale a tutto il mio array squadre
  // cosi da poterci pushare i punti e i falli che sono stati generati dalla funzione
  var team = squadre[i]
  team.punti = randomNum(1 ,15);
  team.falli = randomNum(1 ,15);
}
// stampo la squadra popolata con punti e falli
console.log(squadre);

// dobbiamo ora inserire in squdre un nuovo array che consenga solo nomi e falli

var falliNome = []

for (var i = 0; i < squadre.length; i++) {
  // creo una variabile che abbia sempre tutto il mio array squadre cosi da poterlo usare per pushare il nome e i falli nel nuovo array
  var teamDue = squadre[i];

  falliNome.push({
    nome: teamDue.nome,
    falli:teamDue.falli
  })
}
console.log(falliNome);
