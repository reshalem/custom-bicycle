'use strict';
const fs = require('fs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let rims = fs.readFileSync('./JSON/rims.json', 'utf8');
    let cleanRims = JSON.parse(rims);

    for (let i = 0; i < cleanRims.length; i++) {
        cleanRims[i].createdAt = new Date;
        cleanRims[i].updatedAt = new Date;
    }

    return queryInterface.bulkInsert('Rims', cleanRims);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rims', null, {});
  }
};
