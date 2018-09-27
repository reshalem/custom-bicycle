'use strict';
const fs = require('fs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let tires = fs.readFileSync('./JSON/tires.json', 'utf8');
    let cleanTires = JSON.parse(tires);

    for (let i = 0; i < cleanTires.length; i++) {
        cleanTires[i].createdAt = new Date;
        cleanTires[i].updatedAt = new Date;
    }

    return queryInterface.bulkInsert('Tires', cleanTires);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tires', null, {});
  }
};
