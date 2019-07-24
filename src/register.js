export function findProduct(items, code) {
    for(let i = 0; i < items.length; i++) {
        const item = items[i];
        if(item.code === code) {
            return item;
        }
    }
    return null;
}
    
export function getLineTotal(quantity, price) {
    return Math.round(quantity * price * 100) / 100;
}

export function getOrderTotal(cart, items) {
    //start an order total
    let totalOrder = 0;

    //iterate over the collection of cart items
    for(let i = 0; i < cart.length; i++) {
        //set our cart item
        const cartItem = cart[i];
        //find the product related to the line
        const product = findProduct(items, cartItem.code);
        //get the line total based on quantity and product price
        const lineTotal = getLineTotal(cartItem.quantity, product.price);

        //add line total, to the total order
        totalOrder += lineTotal;
    }

    //return to the total order
    return totalOrder;
}