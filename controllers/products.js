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
                res.render('main',{
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
                    res.render('order', { frameData , handlebarData , rimData})
                })
            })
        })
    }

    static finish(req,res){
        res.send(req.body)
    }
}

module.exports = ProductController;