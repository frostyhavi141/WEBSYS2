const orders = require('../../orders');

function getAllOrders(req, res) {
    let result = orders;

    
    if (req.query.status) {
        result = result.filter(order => order.status === req.query.status);
    }

  
    if (req.query.minTotal && req.query.maxTotal) {
        const min = parseFloat(req.query.minTotal);
        const max = parseFloat(req.query.maxTotal);
        result = result.filter(order => {
            const total = parseFloat(order.totalAmount)
            return total && total >= min && total <= max;
        });
    }

    res.json(result);
}

function getOrderById(req, res) {
    const id = req.params;
    const order = orders.find(order => order.id == id);
    res.json(order);
}

module.exports = { getAllOrders, getOrderById };
