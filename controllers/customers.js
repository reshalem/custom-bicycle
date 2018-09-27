const models = require('../models/index.js');

class CustomerController {
    static getRegisterForm(req, res) {
        res.render('register', {err: null});
    }

    static register(req, res) {
        models.Customer.create(req.body)
            .then(function() {
                res.redirect('/products');
            })
            .catch(function(err) {
                req.body.err = err;
                res.render('register', req.body);
            });
    }
}

module.exports = CustomerController;