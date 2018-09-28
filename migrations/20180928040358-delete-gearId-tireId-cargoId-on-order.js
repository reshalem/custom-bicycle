'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
        queryInterface.removeColumn('Orders', 'GearId'),
        queryInterface.removeColumn('Orders', 'TireId'),
        queryInterface.removeColumn('Orders', 'CargoId')
    ];
  },

  down: (queryInterface, Sequelize) => {
    return [
        queryInterface.addColumn('Orders', 'GearId', Sequelize.INTEGER),
        queryInterface.addColumn('Orders', 'TireId', Sequelize.INTEGER),
        queryInterface.addColumn('Orders', 'CargoId', Sequelize.INTEGER)
    ];
  }
};
