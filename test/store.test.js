import store from '../src/data/store.js';
import items from '../src/data/items.js';

const test = QUnit.test;

QUnit.module('Data Store');

store.storage = window.sessionStorage;

QUnit.testStart(() => {
    store.storage.clear();
});

test('get and save method', assert => {
    const key = 'lamp';
    const lamp = { name: 'lamp' };
    store.save(key, lamp);
    const got = store.get(key);
    assert.deepEqual(got, lamp);
});

test('get products w/ bootstrapped default', (assert) => {
    const products = store.getProducts();
    assert.deepEqual(products, items);
});

test('get shopping cart (returns empty array when non-existent', (assert) => {
    const shoppingCart = store.getShoppingCart();
    assert.deepEqual(shoppingCart, []);
});

test('order product code to shopping cart', (assert) => {
    const code = 'lamp';
    const expected = [{
        code: 'lamp',
        quantity: 1
    }];
    store.orderProduct(code);
    const shoppingCart = store.getShoppingCart();
    assert.deepEqual(shoppingCart, expected);

});

test('order product already in shopping cart', (assert) => {
    const code = 'lamp';
    const expected = [{
        code: 'lamp',
        quantity: 2
    }];
    store.orderProduct(code);
    store.orderProduct(code);
    const shoppingCart = store.getShoppingCart();
    assert.deepEqual(shoppingCart, expected);
});

test('get product by code', (assert) => {
    const code = 'lamp';
    const expected = items[0];
    const item = store.getProduct(code);
    assert.deepEqual(item, expected);
});

test('add a product', (assert) => {
    const product = {
        category: 'other',
        code: 'suitcase',
        description: 'stylish for school, work, or travel',
        image: 'suitcase.png',
        name: 'Vtg Suitcase',
        price: 85.00
    };

    store.addProduct(product);
    const products = store.getProducts();

    assert.deepEqual(products[products.length - 1], product);
});
