const product = require('express').Router();
const ProductController = require('../controllers/products.js');

product.get('/', ProductController.showAll);

module.exports = product;
