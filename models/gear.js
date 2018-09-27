'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gear = sequelize.define('Gear', {
    gear_name: DataTypes.STRING,
    gear_price: DataTypes.INTEGER
  }, {});
  Gear.associate = function(models) {
    Gear.belongsToMany(models.Customer, {through: models.Order});
  };
  return Gear;
};