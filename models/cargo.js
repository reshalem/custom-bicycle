'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cargo = sequelize.define('Cargo', {
    cargo_name: DataTypes.STRING,
    cargo_price: DataTypes.INTEGER
  }, {});
  Cargo.associate = function(models) {
    // Cargo.belongsToMany(models.Customer, {through: models.Order});
  };
  return Cargo;
};