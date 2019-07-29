import store from './data/store.js';
import { getNetProfit } from './register.js';
import salesReportItem from './render-sales.js';
import { toUSD } from './format.js';

const tbody = document.querySelector('tbody');

const shoppingCart = store.getShoppingCart();

for(let i = 0; i < shoppingCart.length; i++) {
    const lineItem = shoppingCart[i];
    const item = store.getProduct(lineItem.code);
    const dom = salesReportItem(lineItem, item);

    tbody.appendChild(dom);
}

const profitCell = document.getElementById('profit-cell');
profitCell.innerText = toUSD(getNetProfit);

store.udpateCartCount();