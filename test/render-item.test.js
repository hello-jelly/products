import renderItem from '../src/render-item.js';

const test = QUnit.test;

QUnit.module('Render Item');

test('render an item', assert => {
    // arrange
    const lamp = {
        code: 'lamp',
        name: 'Lamp',
        image: 'assets/lamp.png',
        description: 'Groovy lamp I scored at a yard sale',
        category: 'home-decor',
        price: 50.00,
        cost: 15.00
    };
    const expected = '<li class="lamp" title="Groovy lamp I scored at a yard sale"><h3>Lamp</h3><img src="assets/lamp.png" alt="Lamp Image"><p class="price">$50.00<button value="lamp">Add</button></p></li>';
    
    // act
    const dom = renderItem(lamp);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});