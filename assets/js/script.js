document.addEventListener('DOMContentLoaded', function() {
    const productsStar = [
        { id: 1, name: "Collar Estrella", price: "$50", imgSrc: "images/collar-estrella.jpg" },
        { id: 2, name: "Anillo Luna", price: "$30", imgSrc: "images/anillo-luna.jpg" },
    ];

    const bestSellers = [
        { id: 3, name: "Pulsera Sol", price: "$40", imgSrc: "images/pulsera-sol.jpg" },
        { id: 4, name: "Pendientes Estrella", price: "$35", imgSrc: "images/pendientes-estrella.jpg" },
    ];

    const newProducts = [
        { id: 5, name: "Collar Corazón", price: "$55", imgSrc: "images/collar-corazon.jpg" },
        { id: 6, name: "Anillo Diamante", price: "$70", imgSrc: "images/anillo-diamante.jpg" },
    ];

    const allProducts = [...productsStar, ...bestSellers, ...newProducts];

    function loadProducts(products, containerId) {
        const container = document.getElementById(containerId);
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.imgSrc}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button onclick="buyProduct(${product.id})">Comprar</button>
            `;
            container.appendChild(productElement);
        });
    }

    window.buyProduct = function(productId) {
        alert(`Producto con ID: ${productId} añadido al carrito.`);
    }

    loadProducts(productsStar, 'products-star');
    loadProducts(bestSellers, 'best-sellers-carousel');
    loadProducts(newProducts, 'new-products-carousel');
    loadProducts(allProducts, 'all-products-grid');
});
