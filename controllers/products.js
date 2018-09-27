const models = require('../models/index.js');

class ProductController {
    static showAll(req, res) {
        console.log(models);
        let frame = models.Frame.findAll();
        let handlebar = models.Handlebar.findAll();
        let gear = models.Gear.findAll();
        let tire = models.Tire.findAll();
        let cargo = models.Cargo.findAll();
        let rim = models.Rim.findAll();

        Promise.all([ frame, handlebar, gear, tire, cargo, rim ])
            .then(function([ frame, handlebar, gear, tire, cargo, rim]) {
                res.send({
                    frame,
                    handlebar,
                    gear,
                    tire,
                    cargo,
                    rim
                });
            })
            .catch(function(err) {
                res.send(err.message);
            });
    }
}

module.exports = ProductController;