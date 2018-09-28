'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    CustomerId: DataTypes.INTEGER,
    FrameId: DataTypes.INTEGER,
    HandlebarId: DataTypes.INTEGER,
    RimId: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER,
    finished: DataTypes.BOOLEAN
  }, {});
  Order.associate = function(models) {
    Order.belongsTo(models.Customer, {onDelete: 'cascade'});
    Order.belongsTo(models.Frame, {onDelete: 'cascade'});
    Order.belongsTo(models.Handlebar, {onDelete: 'cascade'});
    Order.belongsTo(models.Rim, {onDelete: 'cascade'});
  };
  return Order;
};