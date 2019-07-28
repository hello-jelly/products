import { getLineTotal } from './register.js';
import { toUSD } from './format.js';

function renderLineItem(lineItem, item) {
    const tr = document.createElement('tr');

    const thumbnailCell = document.createElement('td');
    thumbnailCell.className = 'thumbnail';
    const thumbnail = document.createElement('img');
    thumbnail.src = item.image;
    thumbnailCell.appendChild(thumbnail);
    tr.appendChild(thumbnailCell);

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
    
    const totalCell = document.createElement('td');
    totalCell.className = 'line-item-total';
    const total = getLineTotal(lineItem.quantity, item.price);
    totalCell.textContent = toUSD(total);
    tr.appendChild(totalCell);

    const removeCell = document.createElement('td');
    removeCell.className = 'remove-cell';
    const removeButton = document.createElement('button');
    removeButton.className = 'remove-button';
    removeCell.appendChild(removeButton);
    tr.appendChild(removeCell);

    return tr;
}

export default renderLineItem;