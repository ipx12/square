let addHoriz = document.querySelector('.add-horizontal');
let addVertical = document.querySelector('.add-vertical');

let remHoriz = document.querySelector('.remove-horizontal');
let remVertical = document.querySelector('.remove-vertical');

let box = document.querySelector('.box');


addHoriz.addEventListener('click', () => {
    box.style.width = Math.floor(box.clientWidth) + 54 + 'px'
    box.innerHTML = '';
    
    for (let i = 0; i < Math.floor(box.clientWidth / 52) * Math.floor(box.clientHeight / 52); i++)
    box.innerHTML += '<div class="squer"></div>';
})

addVertical.addEventListener('click', () => {
    box.style.height = Math.floor(box.clientHeight) + 54 + 'px'
    box.innerHTML = '';
    
    for (let i = 0; i < Math.floor(box.clientWidth / 52) * Math.floor(box.clientHeight / 52); i++)
    box.innerHTML += '<div class="squer"></div>';
})

remVertical.addEventListener('click', () => {
    box.style.height = Math.floor(box.clientHeight) - 50 + 'px'
    box.innerHTML = '';
    
    console.log(box.clientWidth)
    console.log(box.clientHeight)
    for (let i = 0; i < Math.floor(box.clientWidth / 52) * Math.floor(box.clientHeight / 52); i++)
    box.innerHTML += '<div class="squer"></div>';
})

remHoriz.addEventListener('click', () => {
    box.style.width = Math.floor(box.clientWidth) - 50 + 'px'
    box.innerHTML = '';
    
    console.log(box.clientWidth)
    console.log(box.clientHeight)
    for (let i = 0; i < Math.floor(box.clientWidth / 52) * Math.floor(box.clientHeight / 52); i++)
    box.innerHTML += '<div class="squer"></div>';
})
