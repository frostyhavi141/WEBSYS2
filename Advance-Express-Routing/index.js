const express = require('express');
const app = express();


const customerRoutes = require('./src/customers/customer-routes');
const productRoutes = require('./src/products/product-routes');
const orderRoutes = require('./src/orders/orders-routes');


app.use(express.json());


app.use('/customers', customerRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);


app.listen(3000, () => {
    console.log('Server started');
});




