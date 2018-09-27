const router = require('express').Router();
const customer = require('./customer.js');
const product = require('./product.js');

router.use('/customers', customer);
router.use('/products', product);

router.get('/', function(req, res) {
    res.render('home');
});

module.exports = router;
