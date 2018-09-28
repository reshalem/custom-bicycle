const router = require('express').Router();
const customer = require('./customer.js');
const product = require('./product.js');
const CustomerController = require('../controllers/customers.js');

router.get('/', function(req, res) {
    res.render('home');
});

router.get('/register', CustomerController.getRegisterForm);
router.post('/register', CustomerController.register);

router.get('/login', CustomerController.getLoginForm);
router.post('/login', CustomerController.login);

router.use('/customers', function(req, res, next) {
    if (req.session.customer) {
        next();
    } else {
        res.redirect('/login');
    }
}, customer);

router.use('/products', function(req, res, next) {
    if (req.session.customer) {
        next();
    } else {
        res.redirect('/login');
    }
}, product);

module.exports = router;