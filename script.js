// ========== Product Management ==========
function initializeProducts() {
    const defaultProducts = [
        {
            id: 1,
            name: 'Portland Cement',
            category: 'Cement',
            price: 450,
            unit: 'bag',
            description: 'High-quality portland cement for construction'
        },
        {
            id: 2,
            name: 'Mild Steel Rods',
            category: 'Steel',
            price: 55,
            unit: 'kg',
            description: 'Premium steel rods for reinforcement'
        },
        {
            id: 3,
            name: 'Ceramic Floor Tiles',
            category: 'Tiles',
            price: 320,
            unit: 'box',
            description: 'Durable ceramic tiles for floors'
        },
        {
            id: 4,
            name: 'Acrylic Exterior Paint',
            category: 'Paint',
            price: 650,
            unit: 'liter',
            description: 'Weather-resistant exterior paint'
        }
    ];

    if (!localStorage.getItem('products')) {
        localStorage.setItem('products', JSON.stringify(defaultProducts));
    }
}

function getProducts() {
    const products = localStorage.getItem('products');
    return products ? JSON.parse(products) : [];
}

function saveProducts(products) {
    localStorage.setItem('products', JSON.stringify(products));
}

function loadPricingTable() {
    const products = getProducts();
    const tableBody = document.getElementById('priceTableBody');
    const noProducts = document.getElementById('noProducts');

    if (!tableBody) return;

    if (products.length === 0) {
        noProducts.style.display = 'block';
        tableBody.innerHTML = '';
        return;
    }

    noProducts.style.display = 'none';
    tableBody.innerHTML = products.map(product => `
        <tr>
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>₹${product.price.toFixed(2)}</td>
            <td>${product.unit}</td>
            <td>${product.description}</td>
        </tr>
    `).join('');
}

function filterProducts() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    const searchTerm = searchInput.value.toLowerCase();
    const products = getProducts();
    const tableBody = document.getElementById('priceTableBody');
    const noProducts = document.getElementById('noProducts');

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );

    if (filtered.length === 0) {
        noProducts.style.display = 'block';
        tableBody.innerHTML = '';
        return;
    }

    noProducts.style.display = 'none';
    tableBody.innerHTML = filtered.map(product => `
        <tr>
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>₹${product.price.toFixed(2)}</td>
            <td>${product.unit}</td>
            <td>${product.description}</td>
        </tr>
    `).join('');
}

// ========== Admin Dashboard ==========
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('adminEmail').value;
    const password = document.getElementById('adminPassword').value;

    // Simple validation (in production, use real authentication)
    if (email && password) {
        localStorage.setItem('adminLoggedIn', 'true');
        localStorage.setItem('adminEmail', email);
        showDashboard();
        loadAdminProducts();
    }
}

function logout() {
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('adminEmail');
    location.reload();
}

function showDashboard() {
    const loginSection = document.getElementById('loginSection');
    const dashboardSection = document.getElementById('dashboardSection');

    if (loginSection) loginSection.style.display = 'none';
    if (dashboardSection) dashboardSection.style.display = 'block';
}

function loadAdminProducts() {
    const products = getProducts();
    const tableBody = document.getElementById('adminProductsTable');
    const noProducts = document.getElementById('noAdminProducts');

    if (!tableBody) return;

    if (products.length === 0) {
        noProducts.style.display = 'block';
        tableBody.innerHTML = '';
        return;
    }

    noProducts.style.display = 'none';
    tableBody.innerHTML = products.map(product => `
        <tr>
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>₹${product.price.toFixed(2)}</td>
            <td>${product.unit}</td>
            <td>${product.description}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-edit" onclick="openEditModal(${product.id})">Edit</button>
                    <button class="btn-delete" onclick="deleteProduct(${product.id})">Delete</button>
                </div>
            </td>
        </tr>
    `).join('');
}

function handleAddProduct(event) {
    event.preventDefault();

    const name = document.getElementById('productName').value;
    const category = document.getElementById('productCategory').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const unit = document.getElementById('productUnit').value;
    const description = document.getElementById('productDescription').value;

    const products = getProducts();
    const newId = Math.max(...products.map(p => p.id), 0) + 1;

    const newProduct = {
        id: newId,
        name,
        category,
        price,
        unit,
        description
    };

    products.push(newProduct);
    saveProducts(products);

    // Reset form
    event.target.reset();

    // Reload tables
    loadAdminProducts();
    loadPricingTable();

    alert('Product added successfully!');
}

function openEditModal(id) {
    const products = getProducts();
    const product = products.find(p => p.id === id);

    if (!product) return;

    document.getElementById('editProductId').value = product.id;
    document.getElementById('editProductName').value = product.name;
    document.getElementById('editProductCategory').value = product.category;
    document.getElementById('editProductPrice').value = product.price;
    document.getElementById('editProductUnit').value = product.unit;
    document.getElementById('editProductDescription').value = product.description;

    const modal = document.getElementById('editModal');
    modal.style.display = 'flex';
}

function closeEditModal() {
    const modal = document.getElementById('editModal');
    modal.style.display = 'none';
}

function handleEditProduct(event) {
    event.preventDefault();

    const id = parseInt(document.getElementById('editProductId').value);
    const name = document.getElementById('editProductName').value;
    const category = document.getElementById('editProductCategory').value;
    const price = parseFloat(document.getElementById('editProductPrice').value);
    const unit = document.getElementById('editProductUnit').value;
    const description = document.getElementById('editProductDescription').value;

    const products = getProducts();
    const productIndex = products.findIndex(p => p.id === id);

    if (productIndex !== -1) {
        products[productIndex] = {
            id,
            name,
            category,
            price,
            unit,
            description
        };
        saveProducts(products);
        loadAdminProducts();
        loadPricingTable();
        closeEditModal();
        alert('Product updated successfully!');
    }
}

function deleteProduct(id) {
    if (confirm('Are you sure you want to delete this product?')) {
        const products = getProducts();
        const filtered = products.filter(p => p.id !== id);
        saveProducts(filtered);
        loadAdminProducts();
        loadPricingTable();
        alert('Product deleted successfully!');
    }
}

// ========== Initialize on Page Load ==========
document.addEventListener('DOMContentLoaded', function() {
    initializeProducts();
    loadPricingTable();

    // Close modal when clicking outside of it
    const modal = document.getElementById('editModal');
    if (modal) {
        window.onclick = function(event) {
            if (event.target === modal) {
                closeEditModal();
            }
        };
    }
});