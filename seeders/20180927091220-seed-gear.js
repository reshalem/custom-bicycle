'use strict';
const fs = require('fs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let gears = fs.readFileSync('./JSON/gears.json', 'utf8');
    let cleanGears = JSON.parse(gears);

    for (let i = 0; i < cleanGears.length; i++) {
        cleanGears[i].createdAt = new Date;
        cleanGears[i].updatedAt = new Date;
    }

    return queryInterface.bulkInsert('Gears', cleanGears);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Gears', null, {});
  }
};
