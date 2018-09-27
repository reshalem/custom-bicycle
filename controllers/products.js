const models = require('../models/index.js');

class ProductController {
    static showAll(req, res) {
        let frame = models.Frame.findAll();
        let handlebar = models.Handlebar.findAll();
        let gear = models.Gear.findAll();
        let tire = models.Tire.findAll();
        let cargo = models.Cargp.findAll();
        let rim = models.Rim.findAll();

        Promise.all([ frame, handlebar, gear, tire, cargo, rim ])
            .then(function(arr_spareparts) {
                res.send(arr_spareparts);
            })
            .catch(function(err) {
                res.send(err.message);
            });
    }
}

module.exports = ProductController;