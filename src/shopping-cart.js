import order from './data/order.js';
import items from './data/items.js';
import { findProduct } from './register.js';
import renderLineItem from './render-line-item.js';

const tbody = document.querySelector('tbody');

for(let i = 0; i < order.length; i++) {
    const lineItem = order[i];
    const item = findProduct(items, lineItem.code);
    const dom = renderLineItem(lineItem, item);

    tbody.appendChild(dom);
}

// calc order total

// assign to total cell