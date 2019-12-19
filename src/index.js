import data from './data'
import { tabs } from './config'


class SortableTable {
    constructor(tableRows = [], fields = []) {
        this.elem = document.createElement('table');
        this.tableRows = tableRows;
        this.fields = fields;

        this.render()
    }

    updateTable() {
        const foo = document.getElementsByTagName('tbody')

    }

    sort(field, option) {
        console.log('sort', field, option)
        this.tableRows.sort(option.sorter)
        console.log('this.tableRows',this.tableRows)
        this.updateTable()
    }

    createHeader() {
        const thead = document.createElement('thead');
        const tr = document.createElement('tr');
        this.fields.forEach( field => {
            const td = document.createElement('td');
            const option = tabs[field];
            td.innerHTML = option.title;
            if ( option.sorter ) {
                td.addEventListener('click', this.sort.bind(this, field, option))
            }
            tr.append(td)
        });
        thead.append(tr);
        this.elem.append(thead);
    }

    createTable() {
        const tbody = document.createElement('tbody');
        const rows = [];
        this.tableRows.forEach(item => {
            const tr = document.createElement('tr');
            this.fields.forEach(field => {
                const td = document.createElement('td');
                td.innerHTML = item[field];
                tr.append(td)
            })
            rows.push(tr);
        })
        tbody.append(...rows);
        this.elem.append(tbody)
    }

    render() {
        this.createHeader();
        this.createTable();

    }
}

const slicedData = data.slice(0, 50);
const normalizedData = slicedData.map( item => ({
    name: item.title,
    image: item.images[0],
    price: item.price,
    quantity: item.quantity
}));

const table = new SortableTable(normalizedData, ['image', 'name', 'price', 'quantity']);
document.body.append(table.elem);






// class SortableTable {
//     constructor(tableRows = [], fields = []) {
//         this.tableRows = tableRows;
//         this.fields = fields;
//
//         this.render()
//     }
//
//     makeTableHead() {
//         const thead = document.createElement('thead');
//         const row = document.createElement('tr');
//         this.fields.forEach(field => {
//             const elem = tabs[field];
//             const cell = document.createElement('td');
//
//             if ( elem ) {
//                 cell.innerText = elem.title;
//
//                 if ( elem.sorter ) {
//                     cell.addEventListener('click', this.sort.bind(this, elem))
//                 }
//             } else {
//                 cell.innerText = field;
//             }
//             row.append(cell);
//         });
//         thead.append(row);
//         return thead;
//     }
//
//     makeTableRow() {
//         const rows = [];
//         this.tableRows.forEach( item => {
//             const row = document.createElement('tr');
//             this.fields.forEach( field => {
//                 const td = document.createElement('td');
//                 td.innerHTML = tabs[field].render(item[field]);
//                 row.append(td);
//             });
//             rows.push(row);
//         });
//
//         return rows;
//     }
//
//     sort(field) {
//         field.reverse = !field.reverse;
//         console.log('fdddd', field, tabs)
//         this.tableRows.sort(field.sorter)
//         this.render()
//     }
//
//     render() {
//         this.elem = document.createElement('table');
//         // if no data received
//         if ( !this.tableRows.length ) {
//             const row = document.createElement('tr');
//             const cell = document.createElement('td');
//             cell.innerText = 'No data';
//             row.append(cell);
//             this.elem.append(row);
//         }
//
//         const tableHead = this.makeTableHead(this.fields);
//         const tbody = document.createElement('tbody');
//         const tableBody = this.makeTableRow();
//         tbody.append(...tableBody);
//
//         this.elem.append(tableHead);
//         this.elem.append(tbody);
//
//         // HOW CAN I GET READ OF THIS CRUTCH???
//         const el = document.getElementsByTagName('table');
//         if (el[0]) {
//             el[0].replaceWith(this.elem)
//         }
//     }
// }
//
// const slicedData = data.slice(0, 50);
// const normalizedData = slicedData.map( item => ({
//     name: item.title,
//     image: item.images[0],
//     price: item.price,
//     quantity: item.quantity
// }));
//
// let table = new SortableTable(normalizedData, ['image', 'name', 'price', 'quantity']);
// document.body.append(table.elem);