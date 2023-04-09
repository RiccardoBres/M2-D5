/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/*function area(l1,l2) {
     let product = l1 * l2;
     return product;
};*/


/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/*function crazySum (num1, num2) {
if (num1 != num2) {
  return num1 + num2;}
else {
    return (num1 + num2) * 3;}
};
let result = crazySum (5,5)
console.log (result)*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/


/*function crazyDiff (num1) {
  let dif = 0;
  if (num1 > 19) {
    dif = n - 19;

  } else {
    dif = 19-n; 
  }
  if ( dif > 19 ) {
    dif *= 3; 
  } return dif 
}
crazyDiff (5)*/


/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/*function boundary(int) {
  if ((int > 20 && int <=100)|| (int == 400)) {
    console.log (true);
  } else {
    console.log (false)
  }
};
let result = boundary(30);
*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/*function codify (x) {
  let i = "code";
  if ( x.startsWith(y)) {
    return x;
  } else {
    return y.concat(x);
  }
}

let result = codify ("scodess")
console.log (result);*/

/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/*function check3and7 (num) {
  if (num % 3 === 0 || num % 7 ===0) {
    console.log (true);
  } else {
    console.log (false);
  }
}*/

/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/*function reverseString(x) {
  var y = "";
  for (var i = x.length - 1; i >= 0; i--) { 
      y += x[i];
  }
  return y;
}
let result = reverseString('EPICODE');
console.log(result);*/

/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/*function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}
let result = camelize("Ciao ciao ciao")
console.log(result);*/


/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/


/*function cutString(str) {
  let x = str.substring(1, str.length - 1);
  return x
}

let result = cutString("CIAOOO")
console.log (result);*/



/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/*function giveMeRandom (n) {
  let array = [];  
  for (let i = 0; i < n; i++) {
      let randomNumber = Math.floor(Math.random() * 10);
      array.push(randomNumber);       
  }
  return array;
}
  
let result = giveMeRandom (40)
console.log(result);*/