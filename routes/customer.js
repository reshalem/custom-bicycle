const customer = require('express').Router();
const CustomerController = require('../controllers/customers.js');

customer.get('/register', CustomerController.getRegisterForm);
customer.post('/register', CustomerController.register)

module.exports = customer;
