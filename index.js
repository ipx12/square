
class Square {
    constructor(columns, rows, root) {
        this.columns = columns;
        this.rows = rows;
        this._root = root;
    }

    _createAddButtons() {
        const app = document.querySelector(this._root)

        const addVertical = document.createElement('div');
        addVertical.classList.add('add-vertical_2', 'button');
        app.append(addVertical);

        const addHoriz = document.createElement('div');
        addHoriz.classList.add('add-horizontal_2', 'button');
        app.appendChild(addHoriz);

        const plus = document.createElement('div');
        plus.classList.add('plus');

        addHoriz.appendChild(plus)
        addVertical.appendChild(plus.cloneNode())

        let addEventListenerOnAddButtons = () => {
            addHoriz.addEventListener('click', () => {
                let row = document.querySelector('tbody').firstElementChild.cloneNode(true)
                document.querySelector('tbody').appendChild(row)
            })
    
            addVertical.addEventListener('click', () => {
                let rows = document.querySelectorAll('tr')
                rows.forEach(item => {
                    let td = document.createElement('td');
                    item.appendChild(td)
                })
            })
        }
        addEventListenerOnAddButtons();
    }

    _createRemoveButtons() {
        const app = document.querySelector(this._root)

        const remVertical = document.createElement('div');
        remVertical.classList.add('remove-vertical_2', 'button');
        app.append(remVertical);
    
        const remHoriz = document.createElement('div');
        remHoriz.classList.add('remove-horizontal_2', 'button');
        app.append(remHoriz);

        const minus = document.createElement('div');
        minus.classList.add('minus');
        remVertical.append(minus)
        remHoriz.append(minus.cloneNode())

        let addEventListenerOnRemoveButtons = () => {
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
                this._hideRemoveButtons();
            
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
            
                this._hideRemoveButtons();
            
                rows.forEach(item => {
                    item.querySelector(`:nth-child(${numberToRemove + 1})`).remove()
                    
                })
            })
        }
        addEventListenerOnRemoveButtons();
    }



    init = () => {
        const app = document.querySelector(this._root)
        
        this._createAddButtons()
        this._createRemoveButtons()
        
        let table = document.createElement('table');
        let tbody = document.createElement('tbody');
    
        table.append(tbody);
        app.append(table);

        for (let i = 0; i < this.rows; i++) {
            let row = document.createElement('tr');
            tbody.append(row)
        
            for (let j = 0; j < this.columns; j++) {
                let column = document.createElement('td')
                row.append(column)
            }
        }
    
        app.addEventListener('mouseover', (e) => {
            if (e.target && e.target.tagName === 'TD') {
                // showRemoveButtons takes 2 argument first: "horizontalBtn" second: "verticalBtn"
                console.log()
                this._showRemoveButtons(true);
                document.querySelector('.remove-horizontal_2').style.top = e.target.offsetTop + 'px'
        
                this._showRemoveButtons(false, true)
                document.querySelector('.remove-vertical_2').style.left = e.target.offsetLeft + 'px'
            } else {
                this._showRemoveButtons(true, true)
            }
        })
        
        app.addEventListener('mouseout', () => {
            this._hideRemoveButtons();
        })
    
    }

    _hideRemoveButtons() {
        document.querySelector('.remove-horizontal_2').style.visibility = 'hidden'
        document.querySelector('.remove-vertical_2').style.visibility = 'hidden'
    }

    _showRemoveButtons(horizontal = null, vertical = null) {
        if (horizontal && document.querySelectorAll('tr').length !== 1) {
            document.querySelector('.remove-horizontal_2').style.visibility = 'visible'
        }
        if (vertical && (document.querySelectorAll('td').length / document.querySelectorAll('tr').length) !== 1) {
            document.querySelector('.remove-vertical_2').style.visibility = 'visible'
        }
    }

}

const square = new Square(4, 4, '.app');

square.init();
