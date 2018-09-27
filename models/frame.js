'use strict';
module.exports = (sequelize, DataTypes) => {
  const Frame = sequelize.define('Frame', {
    frame_name: DataTypes.STRING,
    frame_price: DataTypes.INTEGER
  }, {});
  Frame.associate = function(models) {
    Frame.belongsToMany(models.Customer, {through: models.Order});
  };
  return Frame;
};