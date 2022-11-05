const q = (el) => document.querySelector(el)
const qA = (el) => document.querySelectorAll(el)
let currentSlide = 0

let totalSlides =  qA('.slider--item').length;

q(".slider--width").style.width = `calc(100vw * ${totalSlides})`

function next(){
    currentSlide++
    if (currentSlide > (totalSlides -1)){
        currentSlide = 0;
    }
    updateMargin();
}

function prev(){
    currentSlide--
    if (currentSlide < 0){
        currentSlide = (totalSlides-1);
    }
    updateMargin();
}

function updateMargin(){
    sliderItemWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    q('.slider--width').style.marginLeft = `-${newMargin}px`
}

setInterval(next, 4000)
