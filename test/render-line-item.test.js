import items from '../src/data/items.js';
import { findProduct } from '../src/register.js';
import renderLineItem from '../src/render-line-item.js';

const test = QUnit.test;

QUnit.module('Render Line Item');

test('renders a line item', assert => {
    // arrange
    const lineItem = {
        code: 'lamp',
        quantity: 1
    };
    const lamp = findProduct(items, lineItem.code);
    const expected = '<tr><td class="thumbnail"><img src="assets/lamp.png"></td><td class="item">Lamp</td>'
        + '<td>1</td><td>$50.00</td><td class="line-item-total">$50.00</td><td class="remove-cell">'
        + '<button class="remove-button"></button></td></tr>';

    // act
    const dom = renderLineItem(lineItem, lamp);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});