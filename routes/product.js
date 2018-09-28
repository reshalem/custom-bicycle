const product = require('express').Router();
const ProductController = require('../controllers/products.js');

product.get('/', ProductController.getProducts);

product.post('/order', ProductController.order);
product.post('/finish', ProductController.finish);

module.exports = product;
