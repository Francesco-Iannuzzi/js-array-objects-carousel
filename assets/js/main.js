/*

Consegna:
Dato un array di oggetti letterali con:
- url dell’immagine
- titolo
- descrizione
Creare un carosello come nella foto allegata.

Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

*/

//creare l'array contente gli oggetti composti da: un'immagine, un titolo ed una descrizione
const videogames = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//settare il videogame principale attivo
let activeVideogame = 0;

//selezionare il container in DOM dove inserire gli oggetti
const carouselEl = document.querySelector('.my_carousel');
//console.log(carouselEl);

//usare il ciclo forEach per ciclare nell'array degli object
videogames.forEach((game, i) => {

    //creare il markup da inserire dinamicamente verificando con il ternario se il gioco selezionato ha la classe "active"
    const markup =
        `
    <div class="videogames ${i === activeVideogame ? 'active' : ''}"">
        <img src="./assets/${game.image}" alt="">
        <div class="carousel_bottom rounded-bottom">
            <h1 class="videogame_title ms-3 pt-2">${game.title}</h1>
            <p class="videogame_description ms-3 mb-0 pb-2">${game.text}</p>
        </div>
    </div>
    `
    //stampare in pagina il markup
    carouselEl.innerHTML += markup
});

//selezionare tutti i videogame
const videogameElement = document.querySelectorAll('.videogames');
//console.log(videogameElement);

//selezionare il pulsante della DOM a cui attribuire l'addEventListener e salvarlo in una variabile
const nextElement = document.querySelector('.next');

//creare un addEventListener per andare all'immagine successiva
nextElement.addEventListener('click', function () {
    //console.log('check next');

    //selezionare il videogame attivo
    const videogameElementActive = videogameElement[activeVideogame];
    //console.log(videogameElementActive);

    //rimuovere la classe active al videogame attivo
    videogameElementActive.classList.remove('active');
    //console.log(videogameElementActive);

    //controllare se il valore di activeVideogame è array.lenght - 1
    if (activeVideogame === videogameElement.length - 1) {

        //se è vero activeVideogame deve essere settato a 0
        activeVideogame = 0


    } else {
        //incrementare il valore dell'activeVideogame
        activeVideogame++
    }

    //aggiungere la classe active al prossimo videogame
    const nextVideogame = videogameElement[activeVideogame];
    nextVideogame.classList.add('active');
});


//selezionare il pulsante della DOM a cui attribuire l'addEventListener e salvarlo in una variabile
const prevElement = document.querySelector('.prev');

//creare un addEventListener per andare all'immagine precedente
prevElement.addEventListener('click', function () {
    //console.log('check prev');
    //selezionare il videogame attivo
    const videogameElementActive = videogameElement[activeVideogame];
    //console.log(videogameElementActive);

    //rimuovere la classe active al videogame attivo
    videogameElementActive.classList.remove('active');
    //console.log(videogameElementActive);

    //controllare se il valore di activeVideogame è array.lenght - 1
    if (activeVideogame === 0) {

        //se è vero activeVideogame deve essere settato a 0
        activeVideogame = videogameElement.length - 1;

    } else {
        //incrementare il valore dell'activeVideogame
        activeVideogame--
    }

    //aggiungere la classe active al prossimo videogame
    const prevVideogame = videogameElement[activeVideogame];
    prevVideogame.classList.add('active');
});
