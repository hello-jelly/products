import store from '../src/data/store.js';

const productForm = document.getElementById('product-form');
const productList = document.getElementById('product-list');

productForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(productForm);
    const image = formData.get('image');
    
    getBase64(image, (base64Url) => {
        const product = {
            code: formData.get('code'),
            name: formData.get('name'),
            image: base64Url,
            category: formData.get('category'),
            price: parseInt(formData.get('category')),
            cost: parseInt(formData.get('cost')),
            description: formData.get('description')
        };
        
        store.addProduct(product);
        productForm.reset();
        displayProductList();
    });
});

// found on SO: https://stackoverflow.com/questions/36280818/how-to-convert-file-to-base64-in-javascript

function getBase64(file, callback) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
        callback(reader.result);
    };
}

function displayProductList() {
    const products = store.getProducts();
    let productsHTML = products.map((product, index) => {
        return `<li>${product.name} <button onclick="removeProduct(${index})")>X</button></li>`;
    });
    productList.innerHTML = productsHTML.join('');
}

displayProductList();

function removeProduct(index) {
    store.removeProduct(index);
    displayProductList();
}
window.removeProduct = removeProduct;