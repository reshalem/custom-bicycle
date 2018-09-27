'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rim = sequelize.define('Rim', {
    rim_name: DataTypes.STRING,
    rim_price: DataTypes.INTEGER
  }, {});
  Rim.associate = function(models) {
    Rim.belongsToMany(models.Customer, {through: models.Order});
  };
  return Rim;
};