var titoloEl = document.getElementById('titolo');
var refreshEl = document.querySelector(".refresh");

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

var xTime = 3;
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
                timerEl.style.border = "1rem solid purple";

            } else if (matriceVerifica.length === 5) {
                timerEl.innerHTML = `Complimenti, HAI VINTO!!!`;
                timerEl.style.border = "1rem solid red";
                timerEl.style.borderRadius = "500px";

            }

            else {
                timerEl.innerHTML = `Hai PERSO`;
                timerEl.style.border = "1rem solid black";
            }

            // FACCIO COMPARIRE IL TASTO REFRESH PER RIAVVIARE IL GIOCO 
            refreshEl.style.display = "block";





        });


    } else {
        xTime = xTime - 1;
        timerEl.innerHTML = xTime;
        console.log(xTime);
    }

}, 1000);










< !DOCTYPE html >
    <html lang="en">

        <head>
            <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Simon</title>
                        <style>
                            .timer {
                                margin: auto;
            width: 70%;
            height: 20vh;
            font-size: 3rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }


        #play {
                                width: 200px;
            height: 200px;
            line-height: 200px;
            background: red;
            color: white;
            font-size: 2rem;
            border: none;
            border-radius: 50%;
            margin-top: 7rem;
            display: flex;
            justify-content: center;
            align-items: center;

        }

        ul>li {
                                list - style: none;
        }

        h1 {
                                display: none;
        }


        div.again {
                                margin - top: 2rem;
            display: flex;
            justify-content: flex-end;
            width: 100%;
            height: 100vh;
            position: absolute;
            top: 0;
            right: 15%;
        }


        div.refresh {
                                display: none;

            padding: 3rem;
            border-radius: 50%;
            font-size: 3rem;
            background-color: #2d2ba2;
            color: white;

        }
    </style>
</head>

                    <body>
                        <h1 id="titolo">Ho trovato i seguenti numeri:</h1>
                        <ul class="timer"></ul>
                        <div class="again">

                            <div class="refresh">Play Again?</div>

                        </div>
                    </body>
                    <script src="./asset/JS/main.js"></script>

</html>