let indice = 1;
muestraSlide(indice);

function avanzaSlider(n) {
    muestraSlide(indice += n);

}

function pocisionSlide() {
    muestraSlide(indice = n);
}

function muestraSlide(n) {
    let i;
    let slides = document.getElementsByClassName('mi_slider');
    let barras = document.getElementsByClassName('barra');

    if (n > 2) {
        indice = 1;
    }
    if (n < 1) {
        indice = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < barras.length; i++) {
        barras[i].className = barras[i].className.replace(" active", "");
    }
    slides[indice - 1].style.display = "flex";
    barras[indice - 1].className += " active";
    console.log(indice);
}