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


//Prendiamo la prima immagine dell'array e la rendiamo attiva

//const items = document.querySelector('.item'); //ALTERNATIVA

const items = document.getElementsByClassName('item');
let itemActive = 0;

items[itemActive].classList.add('active');

//rendo attivo anche il primo cerchio di navigazione

const circles = document.getElementsByClassName('circle');

circles[itemActive].classList.add('active');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', function(){
    //verifico che non siamo fuori dall'array
    if(itemActive < imagesArray.length-1){

        //vado a rimuovere la classe active da quello attuale
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');

        //aggiungere la class active all'elemento successivo dell'Array items e cicle
        items[++itemActive].classList.add('active');
        circles[itemActive].classList.add('active');

    }

    //se siamo fuori dall'array riparti dal primo elemento
    else{

        //vado a rimuovere la classe active da quello attuale
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');

        //imposto il valore di ItemActive alla prima locazione dell'Array
        itemActive = 0; 

        //aggiungere la class active al primo elemento dell'array items e cicle
        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');

    }
});

prev.addEventListener('click', function(){
    //verifico che non siamo fuori dall'array
    if(itemActive > 0){
        //vado a rimuovere la classe active da quello attuale
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');

        //aggiungere la class active all'elemento precedente dell'Array items e cicle
        items[--itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
    }
    //se siamo fuori dall'array riparti dall'ultimo elemento
    else{
        //vado a rimuovere la classe active da quello attuale
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');

        //imposto il valore di ItemActive all'ultima locazione dell'Array
        itemActive = imagesArray.length - 1;

        //aggiungere la class active all'ultimo elemento dell'Array items e cicle
        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
    }
})


