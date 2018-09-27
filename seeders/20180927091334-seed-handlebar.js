'use strict';
const fs = require('fs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let handlebars = fs.readFileSync('./JSON/handlebars.json', 'utf8');
    let cleanHandlebars = JSON.parse(handlebars);

    for (let i = 0; i < cleanHandlebars.length; i++) {
        cleanHandlebars[i].createdAt = new Date;
        cleanHandlebars[i].updatedAt = new Date;
    }

    return queryInterface.bulkInsert('Handlebars', cleanHandlebars);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Handlebars', null, {});
  }
};
