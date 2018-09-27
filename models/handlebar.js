'use strict';
module.exports = (sequelize, DataTypes) => {
  const Handlebar = sequelize.define('Handlebar', {
    handlebar_name: DataTypes.STRING,
    handlebar_price: DataTypes.INTEGER
  }, {});
  Handlebar.associate = function(models) {
    Handlebar.belongsToMany(models.Customer, {through: models.Order});
  };
  return Handlebar;
};