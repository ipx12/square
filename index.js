const app = document.querySelector(".app")

const addVertical = document.createElement('div');
addVertical.classList.add('add-vertical_2', 'button');
app.appendChild(addVertical);

const addHoriz = document.createElement('div');
addHoriz.classList.add('add-horizontal_2', 'button');
document.querySelector(".app").appendChild(addHoriz);



const remVertical = document.createElement('div');
remVertical.classList.add('remove-vertical_2', 'button');
app.appendChild(remVertical);

const remHoriz = document.createElement('div');
remHoriz.classList.add('remove-horizontal_2', 'button');
app.appendChild(remHoriz);


let table = document.createElement('table');
let tbody = document.createElement('tbody');

const plus = document.createElement('div');
const minus = document.createElement('div');
plus.classList.add('plus');
minus.classList.add('minus');

addHoriz.appendChild(plus)
addVertical.appendChild(plus.cloneNode())

remVertical.appendChild(minus)
remHoriz.appendChild(minus.cloneNode())

table.appendChild(tbody);
app.appendChild(table);


let rowAmount = 4;
let columnAmount = 4; 

for (let i = 0; i < rowAmount; i++) {
    let row = document.createElement('tr');
    tbody.appendChild(row)

    for (let j = 0; j < columnAmount; j++) {
        let column = document.createElement('td')
        column.textContent = `Row: ${i + 1} Col:${j + 1}`
        row.appendChild(column)
    }
}

addVertical.addEventListener('click', () => {
    let rows = document.querySelectorAll('tr')
    rows.forEach(item => {
        let td = document.createElement('td');
        item.appendChild(td)
        
    })
    console.log(rows)
})

addHoriz.addEventListener('click', () => {
    let row = document.querySelector('tbody').firstElementChild.cloneNode(true)
    document.querySelector('tbody').appendChild(row)
})


app.addEventListener('mouseover', (e) => {

    if (e.target.tagName === 'TD') {
        remHoriz.style.visibility = 'visible'
        remHoriz.style.top = e.target.offsetTop + 'px'

        remVertical.style.visibility = 'visible'
        remVertical.style.left = e.target.offsetLeft + 'px'
    } else {
        remHoriz.style.visibility = 'visible'
        remVertical.style.visibility = 'visible'
    }
})

app.addEventListener('mouseout', () => {
    remHoriz.style.visibility = 'hidden'
    remVertical.style.visibility = 'hidden'
})

remHoriz.addEventListener('click', () => {
    let rows = document.querySelectorAll('tr');
    let numberToRemove = 0;

    if (rows.length === 1) {
        return
    }

    rows.forEach((item, i) => {
        if (remHoriz.offsetTop - item.offsetTop === 2) {
            numberToRemove = i
        }
    })
    remHoriz.style.visibility = 'hidden'
    remVertical.style.visibility = 'hidden'

    rows[numberToRemove].remove()
})

remVertical.addEventListener('click', () => {
    let rows = document.querySelectorAll('tr');
    let columns = rows[0].querySelectorAll('td')

    if (columns.length === 1) {
        return
    }

    let numberToRemove = 0;

    columns.forEach((item, i) => {
        if (remVertical.offsetLeft - item.offsetLeft === 0) {
            numberToRemove = i;
        }
    })

    remHoriz.style.visibility = 'hidden'
    remVertical.style.visibility = 'hidden'

    rows.forEach(item => {
        item.querySelector(`:nth-child(${numberToRemove + 1})`).remove()
        
    })
})

