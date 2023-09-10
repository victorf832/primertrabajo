window.addEventListener('load', () => {
    let abrir = document.querySelector('#abrir');
    let menu = document.querySelector('.menu');
    abrir.addEventListener("click", ()=>{
        menu.classList.toggle('active');
    })
    
});