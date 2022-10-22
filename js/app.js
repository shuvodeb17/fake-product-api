const loadProducts = () => {
    fetch(`https://fakestoreapi.com/products`)
        .then(res => res.json())
        .then(data => displayProducts(data))
}
loadProducts();
const displayProducts = product => {
    const parent = document.getElementById('parent');
    // console.log(product);
    for (const products of product) {
        // console.log(products);
        const createDiv = document.createElement('div');
        createDiv.classList.add('col');
        createDiv.innerHTML = `
        <div class="card">
            <img  src="${products.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${products.category}</h5>
              <p class="card-text">${products.title}</p>
              <button onclick="productsDetails('${products.id}')" class="btn btn-success">Details</button>
            </div>
        </div>
        `
        parent.appendChild(createDiv);
    }
}

// onclick
const productsDetails = id => {
    fetch(`https://fakestoreapi.com/products`)
        .then(res => res.json())
        .then(data => {
            const newDetails = data.find(d => d.id == id);
            // console.log(newDetails.image);
            const card = document.getElementById('card');
            card.innerHTML = `
            <div class="card">
            <img src="${newDetails.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h4 class="card-title">Title:${newDetails.title}</h4>
              <h5 class="card-title">Category: ${newDetails.category}</h5>
              <h5 class="card-title">Count: ${newDetails.rating.count}</h5>
              <h5 class="card-title">Rating: ${newDetails.rating.rate}</h5>
              <p class="card-text">Rating: ${newDetails.description}</p>
              <h2 class="card-title">Price: ${newDetails.price}</h2>
            </div>
          </div>
            `
        })
}