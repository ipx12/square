
function initSquare(rows, column, root) {
    const app = document.querySelector(root)

    let rowAmount = rows;
    let columnAmount = column; 

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

    function hideRemoveButtons() {
        remHoriz.style.visibility = 'hidden'
        remVertical.style.visibility = 'hidden'
    }

    function showRemoveButtons(horizontal = null, vertical = null) {
        if (horizontal) {
            remHoriz.style.visibility = 'visible'
        }
        if (vertical) {
            remVertical.style.visibility = 'visible'
        }
    }

    for (let i = 0; i < rowAmount; i++) {
        let row = document.createElement('tr');
        tbody.appendChild(row)
    
        for (let j = 0; j < columnAmount; j++) {
            let column = document.createElement('td')
            row.appendChild(column)
        }
    }


    addVertical.addEventListener('click', () => {
        let rows = document.querySelectorAll('tr')
        rows.forEach(item => {
            let td = document.createElement('td');
            item.appendChild(td)
        })
    })

    addHoriz.addEventListener('click', () => {
        let row = document.querySelector('tbody').firstElementChild.cloneNode(true)
        document.querySelector('tbody').appendChild(row)
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
        hideRemoveButtons();
    
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
    
        hideRemoveButtons();
    
        rows.forEach(item => {
            item.querySelector(`:nth-child(${numberToRemove + 1})`).remove()
            
        })
    })

    app.addEventListener('mouseover', (e) => {


        if (e.target && e.target.tagName === 'TD') {
            // showRemoveButtons takes 2 argument first: "horizontalBtn" second: "verticalBtn"
            showRemoveButtons(true);
            remHoriz.style.top = e.target.offsetTop + 'px'
    
            showRemoveButtons(false, true)
            remVertical.style.left = e.target.offsetLeft + 'px'
        } else {
            showRemoveButtons(true, true)
        }
    })
    
    app.addEventListener('mouseout', () => {
        hideRemoveButtons();
    })

}

initSquare(4, 4, ".app")




















