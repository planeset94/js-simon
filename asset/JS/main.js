
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



// 1) Un alert() espone 5 numeri generati casualmente.

// a) scrivo una funzione random e poi un ciclo che inserisce i numeri in una matrice 
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)

}
var listNumber = [];

while (listNumber.length < 5) {
    listNumber.push(randomNumber(0, 100));
}

console.log(listNumber);

// b) creo un alert espone il contenuto della matrice appena creata 
alert('Cerca di ricordare i seguenti numeri: ' + listNumber);


// 2)  Da li parte un timer di 30 secondi.

// 1° Modo : senza timer visivo 
/*
setTimeout(function () {
    alert('Inserisci i numeri che hai visto poco fa, uno alla volta, in ordine');
    var memoriaUtente = [];


    while (memoriaUtente.length < 5) {
        var x = Number(prompt('Per ogni numero, clicca su <OK>'));
        memoriaUtente.push(x);
    }

    console.log("I numeri inseriti dall'utente sono " + memoriaUtente);


}, 3 * 1000);


*/

// 2° modo : con timer visibile 

var timerEl = document.querySelector(".timer");



var xTime = 3;
var timeCounter = setInterval(function () {

    if (xTime === 0) {
        clearInterval(timeCounter);
        timerEl.innerHTML = `<div id="play">GIOCA</div>`;

    } else {
        xTime = xTime - 1;
        timerEl.innerHTML = xTime;
        console.log(xTime);
    }

}, 1000);



/*

document.getElementById('play').addEventListener("click", function () {


    alert('Inserisci i numeri che hai visto poco fa, uno alla volta, in ordine');
    var memoriaUtente = [];


    while (memoriaUtente.length < 5) {
        var x = Number(prompt('Per ogni numero, clicca su <OK>'));
        memoriaUtente.push(x);
    }

    console.log("I numeri inseriti dall'utente sono " + memoriaUtente);


});

*/

var playEl = document.getElementById('play');
