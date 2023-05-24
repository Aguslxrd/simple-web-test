let overlay = document.querySelector('.overlay');
let carrousel = document.querySelector('.carrousel');
let slides = document.querySelectorAll('.carrousel .slide');
let images = document.querySelectorAll('.carrousel .slide img');
let rightArrow = document.querySelector('.right-arrow');
let leftArrow = document.querySelector('.left-arrow');
let counter = 0;

function loadSlides() {
    carrousel.style.height = '90vh';
    let heightCarrousel = carrousel.offsetHeight;

    for (i=0; i< images.length; i++){ //responsive para los tamaños de las imagenes en el carrousel
        if (images[i].offsetHeight < heightCarrousel){
            heightCarrousel = images[i].offsetHeight;
        }
    }
    carrousel.style.height = heightCarrousel + 'px';

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.left = carrousel.offsetWidth * -i + 'px';
    }
}

function openModal() {
    overlay.style.display = 'block';
    carrousel.style.display = 'block';
    loadSlides();
}

function closeModal() {
    overlay.style.display = 'none';
    carrousel.style.display = 'none';
}

function nextSlide() {
    updateArrowsState(1);
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.left = slides[i].offsetLeft + carrousel.offsetWidth + 'px';
    }
}

function prevSlide() {
    updateArrowsState(-1);
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.left = slides[i].offsetLeft - carrousel.offsetWidth + 'px';
    }
}

function updateArrowsState(e) {
    counter += e;
    if (counter !== 0) {
        leftArrow.style.display = 'flex';
    } else {
        leftArrow.style.display = 'none';
    }
    if (counter == slides.length - 1) {
        rightArrow.style.display = 'none';
    } else {
        rightArrow.style.display = 'flex';
    }
    rightArrow.style.pointerEvents = 'none'; //Evitar que las imagenes se bugen
    leftArrow.style.pointerEvents = 'none'; //Evitar que las imagenes se bugen
    setTimeout(() =>{
        rightArrow.style.pointerEvents = 'auto'; 
        leftArrow.style.pointerEvents = 'auto';
    }, 900);
}