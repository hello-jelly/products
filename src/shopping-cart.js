import store from './data/store.js';
import { getOrderTotal } from './register.js';
import renderLineItem from './render-line-item.js';
import { toUSD } from './format.js';

const tbody = document.querySelector('tbody');

const shoppingCart = store.getShoppingCart();

for(let i = 0; i < shoppingCart.length; i++) {
    const lineItem = shoppingCart[i];
    const item = store.getProduct(lineItem.code);
    const dom = renderLineItem(lineItem, item);

    tbody.appendChild(dom);
}

const orderTotalCell = document.getElementById('order-total-cell');
const grandTotal = getOrderTotal(shoppingCart);
orderTotalCell.innerText = toUSD(grandTotal);

console.log(shoppingCart);