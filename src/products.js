import items from './data/items.js';
import renderItem from '/src/render-item.js';
import store from '../src/data/store.js';

const list = document.getElementById('items');

for(let i = 0; i < items.length; i++) {
    const item = items[i];
    const dom = renderItem(item);
    list.appendChild(dom);
}

store.udpateCartCount();