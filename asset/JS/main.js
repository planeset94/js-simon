var titoloEl = document.getElementById('titolo');

// 1) Un alert() espone 5 numeri generati casualmente.

// a) scrivo una funzione random e poi un ciclo che inserisce i numeri in una matrice 
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)

}
var listNumber = [];

while (listNumber.length < 5) {
    var numeroCasuale = randomNumber(0, 100);
    if (!listNumber.includes(numeroCasuale)) {
        listNumber.push(numeroCasuale);

    }
}

console.log(listNumber);

// b) creo un alert espone il contenuto della matrice appena creata 
alert('Cerca di ricordare i seguenti numeri: ' + listNumber);


// 2)  Da li parte un timer di 30 secondi.

var timerEl = document.querySelector(".timer");

var xTime = 1;
var timeCounter = setInterval(function () {

    if (xTime === 0) {
        clearInterval(timeCounter);
        timerEl.innerHTML = `<div id="play">GIOCA</div>`;
        var playEl = document.getElementById('play');




        // 3) Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

        // SE L'UTENTE CLICCA SU GIOCA, ALLORA GLI CHIEDO I NUMERI VISTI IN PRECEDENZA 
        document.getElementById('play').addEventListener("click", function () {

            // Faccio sparire il pulsante
            playEl.style.display = "none";

            alert('Inserisci i numeri che hai visto poco fa, uno alla volta, in ordine');
            var memoriaUtente = [];

            while (memoriaUtente.length < 5) {
                var x = Number(prompt('Per ogni numero, clicca su <OK>'));
                if (!memoriaUtente.includes(x)) {
                    memoriaUtente.push(x);

                } else {
                    alert('Vietato inserire numeri doppi');
                }

            }

            console.log("I numeri inseriti dall'utente sono " + memoriaUtente);


            // 4) Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


            var matriceVerifica = [];
            for (var i = 0; i < memoriaUtente.length; i++) {

                if (listNumber.includes(memoriaUtente[i])) {
                    matriceVerifica.push(memoriaUtente[i]);

                    titoloEl.style.display = "block";
                    titoloEl.insertAdjacentHTML('beforeend', ` 
                    <li class="list-none"> ${memoriaUtente[i]} </li>                  
                    
                    `);

                    // console.log('hai beccato il numero ' + memoriaUtente[i]);
                }

            }
            console.log(matriceVerifica);
            if (matriceVerifica.length < 5 && matriceVerifica.length > 0) {
                timerEl.innerHTML = `Il totale dei numeri trovati è: ${matriceVerifica.length} `;
                timerEl.style.border = "2rem solid purple";



            } else if (matriceVerifica.length === 5) {
                timerEl.innerHTML = `Complimenti, HAI VINTO!!!`;
                timerEl.style.border = "2rem solid red";
                timerEl.style.borderRadius = "500px";

            }

            else {
                timerEl.innerHTML = `Hai PERSO`;
                timerEl.style.border = "2rem solid black";

            }



            var refreshEl = document.querySelector(".refresh");

            // FACCIO COMPARIRE IL TASTO REFRESH PER RIAVVIARE IL GIOCO 
            refreshEl.style.display = "block";
            refreshEl.addEventListener("click", function () {
                window.location.reload(false);
            })



        });





    } else {
        xTime = xTime - 1;
        timerEl.innerHTML = xTime;
        console.log(xTime);
    }

}, 1000);






