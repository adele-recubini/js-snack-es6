// snack 2
// IN ECMA6
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.



function randomNum(min,max) {
  return  Math.floor(Math.random() * (max  - min) + 1) - min;
}

 const squadre = [
    {
      'nome': 'juve',
      'punti': 0,
      'falli': 0,

   },


    {
    'nome': 'milan',
    'punti': 0,
    'falli': 0,

  },

  {
   'nome': 'inter',
   'punti': 0,
   'falli': 0,
 },

];

 // con un ciclo for vado a popolare punti e falli con la funzione numeri randomNum
 for (let i = 0; i < squadre.length; i++) {
   let team = squadre[i]
   team.punti = randomNum(1,15)
   team.falli = randomNum(1,15)
 }
 console.log(squadre);

 // ora voglio popolare la mia squadra anche di un array che abbia solo il nome e i falli delle varie squadre
 // creo un array vuoto e dovro inserirci dentro solo le cose richieste ma con la sintassi ecma6

 const falliNome = [];

 for (let i = 0; i < squadre.length; i++) {
   let teamDue = squadre[i];
 // signfica che da squadre che ora è diventato teamDue voglio prendere solo le chiavi nome e falli
   const{ nome , falli} = teamDue;

   // e poi pusho all ' interno del nuovo array
    falliNome.push({
      nome: nome,
      falli: falli,
    });

 }
  console.log('questo è l array che mi contiene solo le proprietà richieste', falliNome);




// console.log(squadre);
// // destrutturazione
// const{punti, falli} = squadre
// console.log(punti, falli);
