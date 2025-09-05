const products = require('../../products');

function getAllProducts(req, res) {
    let result = products;

    if (req.query.name) {
        const name = req.query.name.toLowerCase();
        result = result.filter(product => product.name.toLowerCase().includes(name));
    }

  
    if (req.query.description) {
        const desc = req.query.description.toLowerCase();
        result = result.filter(product => product.description.toLowerCase().includes(desc));
    }

  
    if (req.query.minPrice && req.query.maxPrice) {
        const min = parseFloat(req.query.minPrice);
        const max = parseFloat(req.query.maxPrice);
        result = result.filter(product => {
            const total = parseFloat(product.price)
            return total && total >= min && total <= max;
        });
    }

    if (req.query.minStock && req.query.maxStock) {
        result = result.filter(product => product.stock >= req.query.minStock && product.stock <= req.query.maxStock);
    }

    res.json(result);
}

function getProductById(req, res) {
    const id = req.params;
    const product = products.find(product => product.id == id);
    res.json(product);
}

module.exports = { getAllProducts, getProductById };
