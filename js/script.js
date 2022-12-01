//Creo array immagini
const imagesArray = [
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp"
]

//Creiamo dinamicamente i div con le immagini del carosello
let itemsContent = '';

for(let i = 0; i < imagesArray.length; i++){
    itemsContent += `<div class="item">
        <img src="./img/${imagesArray[i]}">
    </div>`
}

//inseriamo le immagini nel div che le deve contenere
const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;

const itemsPreview = document.querySelector('.preview');
itemsPreview.innerHTML +=itemsContent;

//Prendiamo la prima immagine dell'array e la rendiamo attiva

//const items = document.querySelector('.item'); //ALTERNATIVA
const items = document.querySelectorAll('.slider .item');
let itemActive = 0;
let itemPreviewActive = 0;

items[itemActive].classList.add('active');

const previewItems = document.querySelectorAll('.preview .item');
previewItems[itemActive].classList.add('active');

//rendo attivo anche il primo cerchio di navigazione

const circles = document.getElementsByClassName('circle');

circles[itemActive].classList.add('active');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', function(){

    //vado a rimuovere la classe active da quello attuale
    items[itemActive].classList.remove('active');
    circles[itemActive].classList.remove('active');
    previewItems[itemActive].classList.remove('active');

    //verifico che non siamo fuori dall'array
    (itemActive > 0) ? itemActive-- : itemActive = imagesArray.length - 1;

    //aggiungere la class active all'elemento precedente dell'Array items e cicle
    items[itemActive].classList.add('active');
    circles[itemActive].classList.add('active');
    previewItems[itemActive].classList.add('active');
    
});

prev.addEventListener('click', function(){

    //vado a rimuovere la classe active da quello attuale
    items[itemActive].classList.remove('active');
    circles[itemActive].classList.remove('active');
    previewItems[itemActive].classList.remove('active');

    //verifico che non siamo fuori dall'array
    (itemActive < imagesArray.length - 1) ? itemActive++ : itemActive = 0;

    //aggiungere la class active all'elemento successivo dell'Array items e cicle
    items[itemActive].classList.add('active');
    circles[itemActive].classList.add('active');
    previewItems[itemActive].classList.add('active');
    
})


