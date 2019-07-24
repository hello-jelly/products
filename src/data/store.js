import items from './items.js';
import {findProduct } from '../register.js';

const productKey = 'products';
const shoppingKey = 'shopping-cart';

const store = {
    storage: window.localStorage,
    save(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    },
    get(key) {
        const json = store.storage.getItem(key);
        const item = JSON.parse(json);
        return item;
    },
    getProducts() {
        let products = store.get(productKey);
        if(!products) {
            store.save(productKey, items);
            products = items;
        }
        return products;
    },
    getProduct(code) {
        const products = store.getProducts();
        const product = findProduct(products, code);
        return product;
    },
    getShoppingCart() {
        let shoppingCart = store.get(shoppingKey);
        if(!shoppingCart) = [];
    }
    return shoppingCart;
},
orderProduct(code) {
    const shoppingCart = store.getShoppingCart();
    const lineItem = findProduct(shoppingCart, code);
    if(lineItem) {
        lineItemItem.quantity++;
    } else {
        const lineItem = {
            code: code,
            quantity: 1
        };
        shoppingCart.push(lineItem);

        }
        store.save(shoppingKey, shoppingCart);
    }
};

export default store;