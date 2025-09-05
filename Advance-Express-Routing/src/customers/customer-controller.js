const customers = require('../../customers');

function getAllCustomer(req, res) {
    let result = customers;

   
    if (req.query.gender) {
        result = result.filter(customer => customer.gender === req.query.gender);
    }

 
    if (req.query.age) {
        result = result.filter(customer => {
            const birthyear = new Date(customer.birthday).getFullYear();
            const age = new Date().getFullYear() - birthyear;
            return age == req.query.age;
        });
    }


    if (req.query.startDate && req.query.endDate) {
        result = result.filter(customer => {
            const created = new Date(customer.createdAt);
            const start = new Date(req.query.startDate);
            const end = new Date(req.query.endDate);
            return created >= start && created <= end;
        });
    }

    res.json(result);
}

function getCustomerById(req, res) {
    const id = req.params;
    const customer = customers.find(customer => customer.id == id);
    res.json(customer); 
}

module.exports = { getAllCustomer, getCustomerById };
