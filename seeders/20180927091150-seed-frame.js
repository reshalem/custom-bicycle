'use strict';
const fs = require('fs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let frames = fs.readFileSync('./JSON/frames.json', 'utf8');
    let cleanFrames = JSON.parse(frames);

    for (let i = 0; i < cleanFrames.length; i++) {
        cleanFrames[i].createdAt = new Date;
        cleanFrames[i].updatedAt = new Date;
    }

    return queryInterface.bulkInsert('Frames', cleanFrames);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Frames', null, {});
  }
};
