'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tire = sequelize.define('Tire', {
    tire_name: DataTypes.STRING,
    tire_price: DataTypes.INTEGER
  }, {});
  Tire.associate = function(models) {
    Tire.belongsToMany(models.Customer, {through: models.Order});
  };
  return Tire;
};