const router = require('express').Router();
const customer = require('./customer.js');
const product = require('./product.js');

router.get('/', function(req, res) {
    res.render('home');
});

router.use('/customers', customer);
router.use('/products', product);

module.exports = router;