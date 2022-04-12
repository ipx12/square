
const wrapBox = document.createElement('div');
const box = document.createElement('div');

const addHoriz = document.createElement('div');
const remHoriz = document.createElement('div');

const addVertical = document.createElement('div');
const remVertical = document.createElement('div');

const plus = document.createElement('div');
const minus = document.createElement('div');

wrapBox.classList.add('wrap-box');
box.classList.add('box');

addHoriz.classList.add('add-horizontal');
remHoriz.classList.add('remove-horizontal');

addVertical.classList.add('add-vertical');
remVertical.classList.add('remove-vertical');

plus.classList.add('plus');
minus.classList.add('minus');

function start(root) {
    document.querySelector(root).append(wrapBox);

    wrapBox.append(remVertical);
    wrapBox.append(remHoriz);
    wrapBox.append(addHoriz);
    wrapBox.append(box);
    wrapBox.append(addVertical);

    remVertical.append(minus.cloneNode());
    remHoriz.append(minus);

    addHoriz.append(plus.cloneNode());
    addVertical.append(plus);
}

start('.wrap');

fillSquere();

function fillSquere() {
    while (box.firstChild) {
        box.removeChild(box.lastChild)
    }

    remVertical.addEventListener('mouseover', () => {
        remVertical.style.visibility = "visible";
        remHoriz.style.visibility = "visible";
    })

    remVertical.addEventListener('mouseout', () => {
        remVertical.style.visibility = "hidden";
        remHoriz.style.visibility = "hidden";
    })

    remHoriz.addEventListener('mouseover', () => {
        remVertical.style.visibility = "visible";
        remHoriz.style.visibility = "visible";
    })

    remHoriz.addEventListener('mouseout', () => {
        remVertical.style.visibility = "hidden";
        remHoriz.style.visibility = "hidden";
    })

    for (let i = 0; i < Math.floor(box.clientWidth / 52) * Math.floor(box.clientHeight / 52); i++) {
       let squere = document.createElement('div')



       squere.addEventListener('mouseover', () => {

            remVertical.style.visibility = "visible";
            remVertical.style.left = squere.offsetLeft + 'px'

            remHoriz.style.visibility = "visible";
            remHoriz.style.top = squere.offsetTop + 'px'
       })

       squere.addEventListener('mouseout', () => {
            remVertical.style.visibility = "hidden";
            remHoriz.style.visibility = "hidden";
       })

       squere.classList.add('square')
       box.append(squere)
    }
}

function changeWidth(change) {
    switch (change) {
        case "plus":
            return Math.floor(box.clientWidth) + 54 + 'px'
        case "minus":
            return Math.floor(box.clientWidth) - 50 + 'px'
    }
}

function changeHeight(change) {
    switch (change) {
        case "plus":
            return Math.floor(box.clientHeight) + 54 + 'px'
        case "minus":
            return Math.floor(box.clientHeight) - 50 + 'px'
    }
}

addHoriz.addEventListener('click', () => {
    box.style.width = changeWidth('plus')
    fillSquere()
})

remHoriz.addEventListener('click', () => {
    box.style.width = changeWidth('minus')
    fillSquere()
})

addVertical.addEventListener('click', () => {
    box.style.height = changeHeight('plus')
    fillSquere()
})

remVertical.addEventListener('click', () => {
    box.style.height = changeHeight('minus')
    fillSquere()
})



