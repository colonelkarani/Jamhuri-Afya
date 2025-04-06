const hammenu = document.querySelector('.menu-toggle');
const offscreen = document.querySelector('.offscreen');

hammenu.addEventListener('click', ()=>{
    hammenu.classList.toggle('active');
    offscreen.classList.toggle('active')
})