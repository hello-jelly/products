import store from '../src/data/store.js';

const productForm = document.getElementById('product-form');

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
        alert('product saved!');
        productForm.reset();
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