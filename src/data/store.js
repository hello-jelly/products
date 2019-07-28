import items from './items.js';
import { findProduct } from '../register.js';

const PRODUCT_KEY = 'products';
const SHOPPING_CART_KEY = 'shopping-cart';

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
        let products = store.get(PRODUCT_KEY);
        if(!products) {
            store.save(PRODUCT_KEY, items);
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
        let shoppingCart = store.get(SHOPPING_CART_KEY);
        if(!shoppingCart) {
            shoppingCart = [];
        }
        return shoppingCart;
    },
    getShoppingCartCount() {
        const shoppingCartItems = store.getShoppingCart();
        let shoppingCartCount = 0;
        for(let i = 0; i < shoppingCartItems.length; i++) {
            const shoppingCartItem = shoppingCartItems[i];
            shoppingCartCount += shoppingCartItem.quantity;
        }
        return shoppingCartCount;
    },
    udpateCartCount() {
        const count = document.getElementById('count');
        count.innerText = store.getShoppingCartCount();
    },
    orderProduct(code) {
        const shoppingCart = store.getShoppingCart();
        const lineItem = findProduct(shoppingCart, code);
        if(lineItem) {
            lineItem.quantity++;
        } else {
            const lineItem = {
                code: code,
                quantity: 1
            };
            shoppingCart.push(lineItem);
        }
        store.save(SHOPPING_CART_KEY, shoppingCart);
        store.udpateCartCount();
    },
    addProduct(product) {
        const products = store.getProducts();
        products.push(product);
        store.save(PRODUCT_KEY, products);
    },
    removeProduct(index) {
        const products = store.getProducts();
        products.splice(index, 1);
        store.save(PRODUCT_KEY, products);
    }
};

export default store;