import { getLineTotal } from './register.js';
import { toUSD } from './format.js';

function salesReportItem(lineItem, item) {
    const tr = document.createElement('tr');

    const emptyCell = document.createElement('td');
    emptyCell.textContent = ('');
    tr.appendChild(emptyCell);

    const itemCell = document.createElement('td');
    const name = document.createTextNode(item.name);
    itemCell.className = 'item';
    itemCell.appendChild(name);
    tr.appendChild(itemCell);
    
    const quantityCell = document.createElement('td');
    quantityCell.textContent = lineItem.quantity;
    tr.appendChild(quantityCell);
    
    const priceCell = document.createElement('td');
    priceCell.textContent = toUSD(item.price);
    tr.appendChild(priceCell);

    const costCell = document.createElement('td');
    costCell.textContent = toUSD(item.cost);
    tr.appendChild(costCell);
    
    const profitCell = document.createElement('td');
    const profit = (getLineTotal - item.cost);
    profitCell.textContent = toUSD(parseInt(profit));
    tr.appendChild(profitCell);

    const newEmptyCell = document.createElement('td');
    newEmptyCell.textContent = ('');
    tr.appendChild(newEmptyCell);

    return tr;
}

export default salesReportItem;