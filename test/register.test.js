import items from '../src/data/items.js';
import order from '../src/data/order.js';
import { findProduct, getLineTotal, getOrderTotal } from '../src/register.js';
const test = QUnit.test;

QUnit.module('Register');

test('Find product by code', assert => {
    // arrange
    const code = 'lamp';
    const expected = {
        code: 'lamp',
        name: 'Lamp',
        image: 'assets/lamp.png',
        description: 'Groovy lamp I scored at a yard sale',
        category: 'home-decor',
        price: 50.00,
        cost: 15.00
    };

    const foundProduct = findProduct(items, code);
    assert.deepEqual(foundProduct, expected);
});

test('calculate line total', (assert) => {
    const quantity = 1;
    const price = 50.00;
    const expected = 50.00;
    const total = getLineTotal(quantity, price);
    assert.equal(total, expected);
});

test('calculate order total', (assert) => {
    const expected = 227.00;
    const orderTotal = getOrderTotal(order, items);
    assert.equal(orderTotal, expected);
});

// const code = 'lamp';
// const shirt = { code: 'shirt' };
// const gnome = { code: 'gnome' };
// const expected = 'Lamp';

// const foundProduct = findProduct(items, code);
// foundProduct.name, expected