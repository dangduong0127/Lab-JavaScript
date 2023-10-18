'use strict';
const ShowMD = document.querySelectorAll('.show-modal');
const ModalHD = document.querySelector('.modal');
const Overlay = document.querySelector('.overlay');
const CloseMD = document.querySelector('.close-modal');
const init = function(){
    ModalHD.classList.add('hidden');
    Overlay.classList.add('hidden');
}

console.log(ShowMD)
for(let i = 0; i < ShowMD.length; i++) {
    ShowMD[i].addEventListener('click', function(){
        ModalHD.classList.remove('hidden');
        Overlay.classList.remove('hidden');
    })
}

CloseMD.addEventListener('click', init)

Overlay.addEventListener('click', init)