// Esercizi aggiuntivi

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray", che riceve come parametro un array di numeri random (creati con giveMeRandom)
 e stampa in console, per ogni oggetto, true/false a seconda che il numero sia più grande di 5 o no.
 La funzione deve infine tornare la somma di solamente i numeri che sono risultati maggiori di 5.
*/

/*function giveMeRandom (n) {
    let array = [];  
    for (let i = 0; i < n; i++) {
        let randomNumber = Math.floor(Math.random() * 10);
        array.push(randomNumber);       
    }
    return array;
}
function checkArray(array) {
    let sum = []
    let somma = 0
    console.log(array);
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 5) {
            sum.push(array[i]);
            console.log(true);
        } else {
            console.log(false);
        }
    }
    console.log(sum);
    for (let x = 0; x < sum.length; x++) {
        somma += sum[x]
    }
    return somma;
}
let final = checkArray(giveMeRandom(5))
console.log(final);*/

/* EXTRA 2
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio.
*/

/*let shoppingCart = [

    { nome: "Marco",
      prezzo : 25,
      id: 3008,
      colli: 3,},
    { nome: "Alex",
      prezzo : 15,
      id: 3002,
      colli: 6,},
    { nome: "Franco",
      prezzo : 5,
      id: 3001,
      colli: 1,}]

function shoppingCartTotal(Totale) { 
    let totale = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        totale += shoppingCart[i].prezzo;
    }  return totale;
    
}  
let risultato = shoppingCartTotal(shoppingCart);
console.log (risultato)*/





/* EXTRA 3
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto, lo aggiunge allo shoppingCart e ritorna il numero totale degli oggetti in esso contenuti.
*/



 /*let shoppingCart = [
    { nome: "Marco", prezzo: 25, id: 3008, colli: 3 },
    { nome: "Alex", prezzo: 15, id: 3002, colli: 6 },
    { nome: "Franco", prezzo: 5, id: 3001, colli: 1 }
  ];
  
  function addToShoppingCart(oggetto) {
    shoppingCart.push(oggetto);
    return shoppingCart.length;
  }
  
  let nuovoOggetto = { nome: "Giovanni", prezzo: 20, id: 3009, colli: 2 };
  let lunghezza = addToShoppingCart(nuovoOggetto);
  console.log(lunghezza);*/

/* EXTRA 4
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array shoppingCart e ritorna l'oggetto più costoso in esso contenuto.
*/

/*let shoppingCart = [
    { nome: "Marco", prezzo: 25, id: 3008, colli: 3 },
    { nome: "Alex", prezzo: 15, id: 3002, colli: 6 },
    { nome: "Franco", prezzo: 5, id: 3001, colli: 1 }
  ];

function maxShoppingCart(arr) {
    return shoppingCart.reduce ((preced, success) => {
        return (preced.prezzo> success.prezzo) ? preced : success;
    })
} 
let valore = maxShoppingCart();
console.log (valore) */

/* EXTRA 5
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array shoppingCart e ritorna l'ultimo oggetto in esso contenuto.
*/

/*let shoppingCart = [
    { nome: "Marco", prezzo: 25, id: 3008, colli: 3 },
    { nome: "Alex", prezzo: 15, id: 3002, colli: 6 },
    { nome: "Franco", prezzo: 5, id: 3001, colli: 1 }
  ]
 function latestShoppingCart() {
    let lastElement = shoppingCart[shoppingCart.length - 1];
    return lastElement
 } 
let result = latestShoppingCart();
console.log (result) */


/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve come parametro un intero "x" compreso tra 0 e 9.
 La funzione mostra in console un numero casuale tra 0 e 9 finchè il numero estratto è maggiore di x per 3 volte di fila.
*/




/* EXTRA 7
 Crea una funzione chiamata "average" che riceve un array come parametro e ritorna la media aritmetica dei numeri in esso contenuti.
 La funzione salta automaticamente qualsiasi valore non numerico all'interno dell'array.
*/
/*let array = [1,10,"Suiii",15];
let sum= 0;

function average() {
        for (i=0; i<array.length; i++) {
            if (typeof array[i] === 'number') {
          sum += array[i];}
        }
        let media = sum / (array.length - 1);
        return media;
    }

let result = average();
console.log (result)*/



    /* EXTRA 8
 Scrivi una funzione chiamata "longest" che ricerca la stringa più lunga all'interno del parametro ricevuto (un array di stringhe).
*/
/*let array = ["Roberto", "Francesco", "Giacomo", "Suiiiiiiiiiiiii"];
let string = array[0];
function longest() { 
        for(i=0; i < array.length; i++){
            if (array[i].length > string.length) {
                string = array[i];
            }
        }return string
}
let result = longest();
console.log (result) */




/* EXTRA 9
 Scrivi una funzione per creare un filtro anti spam molto semplice per una casella email. La funzione riceve una stringa come parametro, "emailContent", e ritorna un boolean.
 La funzione deve tornare true se emailContent NON contiene le parole "SPAM" o "SCAM".
*/

/*function filtro (emailContent) {
    if (emailContent.includes("SPAM") || emailContent.includes("SCAM")) {
    return false;}
    else {
        return true;
    }
} 
let result = filtro ("Ciaoo");
console.log(result); */

/* EXTRA 10
 Scrivi una funzione che riceve come parametro una data e ritorna il numero di giorni passati ad oggi.
*/



/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due interi, "x" e "y".
 La funzione deve tornare una matrice di x volte y, e ogni valore deve rappresentare l'indice dell'elemento.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
