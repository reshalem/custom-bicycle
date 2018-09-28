const product = require('express').Router();
const ProductController = require('../controllers/products.js');

product.get('/', (req,res)=>{
    res.send('halo dari product')
});

product.post('/order',ProductController.order)

product.post('/finish',ProductController.finish)




module.exports = product;
