function renderItem(item) {
    const li = document.createElement('li');
    li.className = item.code;
    li.title = item.description;
        
    const h3 = document.createElement('h3');
    h3.textContent = item.name;
    li.appendChild(h3);
        
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name + ' Image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';
    p.textContent = item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = item.code;
    p.appendChild(button);
        
    li.appendChild(p);

    return li;
}

export default renderItem;