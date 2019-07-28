import { getLineTotal } from './register.js';
import { toUSD } from './format.js';
import store from './data/store.js';

function renderLineItem(lineItem, item) {
    const tr = document.createElement('tr');

    const itemCell = document.createElement('td');
    const name = document.createTextNode(item.name);
    itemCell.appendChild(name);
    tr.appendChild(itemCell);
    
    const quantityCell = document.createElement('td');
    quantityCell.textContent = lineItem.quantity;
    tr.appendChild(quantityCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = toUSD(item.price);
    tr.appendChild(priceCell);
    
    const totalCell = document.createElement('td');
    totalCell.className = 'line-item-total';
    const total = getLineTotal(lineItem.quantity, item.price);
    totalCell.textContent = toUSD(total);
    tr.appendChild(totalCell);

    return tr;
}

export default renderLineItem;