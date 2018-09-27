'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Customer.associate = function(models) {
    Customer.belongsToMany(models.Frame, {through: models.Order});
    Customer.belongsToMany(models.Handlebar, {through: models.Order});
    Customer.belongsToMany(models.Gear, {through: models.Order});
    Customer.belongsToMany(models.Tire, {through: models.Order});
    Customer.belongsToMany(models.Cargo, {through: models.Order});
    Customer.belongsToMany(models.Rim, {through: models.Order});
  };
  return Customer;
};