const models = require('../models/index.js');
const convertDate = require('../helper/convertDate.js');
const crypto = require('crypto');
const encryptPassword = require('../helper/encryptPassword.js');

class ProductController {
    static getProducts(req, res) {
        res.render('product');
    }

    static order(req,res){
        models.Frame.findOne({
            where : {id : req.body.frame_id}
        })
        .then((frameData)=>{
            models.Handlebar.findOne({
                where : {id : req.body.handlebar_id}
            })
            .then((handlebarData)=>{
                models.Rim.findOne({
                    where : { id : req.body.rims_id}
                })
                .then((rimData)=>{
                    if (frameData === null) {
                        res.redirect('/products');
                    }

                    res.render('order', { frameData , handlebarData , rimData });
                })
                .catch(function(err) {
                    req.body.err = err;
                    res.render('product', req.body);
                })
            })
            .catch(function(err) {
                req.body.err = err;
                res.render('product', req.body);
            })
        })
        .catch(function(err) {
            req.body.err = err;
            res.render('product', req.body);
        })
    }

    static finish(req,res) {
        req.body.CustomerId = req.session.customer.id;
        models.Order.create(req.body)
            .then(function() {
                res.redirect('/products');
            })
            .catch(function(err) {
                req.body.err = err;
                res.render('product', req.body);
            });
    }
}

module.exports = ProductController;