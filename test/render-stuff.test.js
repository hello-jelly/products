import renderStuff from '../src/render-stuff.js';

const test = QUnit.test;

QUnit.module('Render Stuff');

test('renders some stuff', assert => {
    // arrange
    const shoe = {
        code: 'shoe',
        name: 'A Shoe',
        image: 'assets/shoe.png',
        description: 'the surviving half of a pair claimed as a chew toy',
        category: 'shoes',
        price: 35.00,
        cost: 2.00
    };
    const expected = '<li class="shoes" title="the surviving half of a pair claimed as a chew toy"><h3>A Shoe</h3><img src="assets/shoe.png" alt="Single Shoe Image"><p class="price">$1.00<button value="shoe">Add</button></p></li>';
    
    // act
    const dom = renderStuff(shoe);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});