const models = require('../models/index.js');
const convertDate = require('../helper/convertDate.js');
const crypto = require('crypto');
const encryptPassword = require('../helper/encryptPassword.js');

class CustomerController {
    static getRegisterForm(req, res) {
        res.render('register', {err: null});
    }

    static register(req, res) {
        models.Customer.create(req.body)
            .then(function() {
                res.redirect('/login');
            })
            .catch(function(err) {
                req.body.err = err;
                res.render('register', req.body);
            });
    }

    static getLoginForm(req, res) {
        res.render('login', {err: null});
    }

    static login(req, res) {
        encryptPassword(req.body);

        models.Customer.findOne({
            where: {
                username: req.body.username,
                password: req.body.password
            }
        })
            .then(function(customer) {
                if (customer) {
                    req.session.customer = {
                        username: customer.username,
                        id: customer.id
                    }

                    res.redirect('/products');
                } else {
                    let err = {
                        message: 'Validation error: Wrong username or password'
                    }
                    req.body.err = err;
                    res.render('login', req.body);
                }
            })
            .catch(function(err) {
                req.body.err = err;
                res.render('login', req.body);
            });
    }

    static showProfile(req, res) {
        models.Customer.findOne({
            include: [
                {model: models.Frame},
                {model: models.Handlebar},
                {model: models.Rim}
            ],
            where: {id: req.session.customer.id}
        })
            .then(function(customer) {
                res.render('customer', {customer: customer, err: null, convertDate: convertDate});
            })
            .catch(function(err) {
                req.body.err = err;
                res.render('customer', req.body);
            });
    }

    static getEditForm(req, res) {
        models.Customer.findOne({where: {id: req.session.customer.id}})
            .then(function(customer) {
                res.render('editCustomer', {customer: customer, err: null});
            })
            .catch(function(err) {
                req.body.err = err;
                res.render('editCustomer', req.body);
            })
    }

    static edit(req, res) {
        models.Customer.update(req.body, {where: {id: req.session.customer.id}})
            .then(function() {
                res.redirect('/customers');
            })
            .catch(function(err) {
                models.Customer.findOne({where: {id: req.session.customer.id}})
                    .then(function(customer) {
                        res.render('editCustomer', {customer: customer, err: err});
                    })
                    .catch(function(err) {
                        req.body.err = err;
                        res.render('editCustomer', req.body);
                    });
            });
    }

    static logout(req, res) {
        req.session.customer = null;
        res.redirect('/');
    }
}

module.exports = CustomerController;