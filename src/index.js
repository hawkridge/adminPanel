import data from './data'
import { tabs } from './config'

class SortableTable {
    constructor(tableRows = [], fields = []) {
        this.tableRows = tableRows;
        this.fields = fields;

        this.render()
    }

    makeTableHead() {
        const thead = document.createElement('thead');
        const row = document.createElement('tr');
        this.fields.forEach(field => {
            const elem = tabs[field];
            const cell = document.createElement('td');

            if ( elem ) {
                cell.innerText = elem.title;

                if ( elem.sorter ) {
                    cell.addEventListener('click', this.sort.bind(this, elem))
                }
            } else {
                cell.innerText = field;
            }
            row.append(cell);
        });
        thead.append(row);
        return thead;
    }

    makeTableRow() {
        const rows = [];
        this.tableRows.forEach( item => {
            const row = document.createElement('tr');
            this.fields.forEach( field => {
                const td = document.createElement('td');
                td.innerHTML = tabs[field].render(item[field]);
                row.append(td);
            });
            rows.push(row);
        });

        return rows;
    }

    sort(field) {
        field.reverse = !field.reverse;
        console.log('fdddd', field, tabs)
        this.tableRows.sort(field.sorter)
        this.render()
    }

    render() {
        this.elem = document.createElement('table');
        // if no data received
        if ( !this.tableRows.length ) {
            const row = document.createElement('tr');
            const cell = document.createElement('td');
            cell.innerText = 'No data';
            row.append(cell);
            this.elem.append(row);
        }

        const tableHead = this.makeTableHead(this.fields);
        const tbody = document.createElement('tbody');
        const tableBody = this.makeTableRow();
        tbody.append(...tableBody);

        this.elem.append(tableHead);
        this.elem.append(tbody);

        // HOW CAN I GET READ OF THIS CRUTCH???
        const el = document.getElementsByTagName('table');
        if (el[0]) {
            el[0].replaceWith(this.elem)
        }
    }
}

const slicedData = data.slice(0, 50);
const normalizedData = slicedData.map( item => ({
    name: item.title,
    image: item.images[0],
    price: item.price,
    quantity: item.quantity
}));

let table = new SortableTable(normalizedData, ['image', 'name', 'price', 'quantity']);
document.body.append(table.elem);