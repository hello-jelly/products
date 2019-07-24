import { getLineTotal } from './register.js';
import { toUSD } from './format.js';

function renderLineItem(lineItem, item) {
    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.className = 'align-left';
    nameCell.textContent = item.name;
    tr.appendChild(nameCell);

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