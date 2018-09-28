const customer = require('express').Router();
const CustomerController = require('../controllers/customers.js');

customer.get('/', CustomerController.showProfile);

customer.get('/edit', CustomerController.getEditForm);
customer.post('/edit', CustomerController.edit);

customer.get('/logout', CustomerController.logout);

module.exports = customer;
