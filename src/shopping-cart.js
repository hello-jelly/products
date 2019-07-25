import store from './data/store.js';
import renderLineItem from './render-line-item.js';

const tbody = document.querySelector('tbody');

const shoppingCart = store.getShoppingCart();

for(let i = 0; i < shoppingCart.length; i++) {
    const lineItem = shoppingCart[i];
    const item = store.getProduct(lineItem.code);
    const dom = renderLineItem(lineItem, item);

    tbody.appendChild(dom);
}