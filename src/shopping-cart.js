import cart from './data/order.js';
import items from './data/items.js';
import { findProduct, getOrderTotal } from './register.js';
import renderLineItem from './render-line-item.js';
import { toUSD } from './format.js';

const tbody = document.querySelector('tbody');

const shoppingCart = store.getShoppingCart();

for(let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const item = store.getProduct(lineItem.code);
    const dom = renderLineItem(lineItem, item);

    tbody.appendChild(dom);
}

const orderTotalCell = document.getElementById('order-total-cell');
const grandTotal = getOrderTotal(cart, items);
orderTotalCell.innerText = toUSD(grandTotal);