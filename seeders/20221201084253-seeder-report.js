'use strict';
const fs = require('fs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const reportData = JSON.parse(fs.readFileSync('./data/reports.json', 'utf-8'))
      .map(report => {
        report.createdAt = new Date()
        report.updatedAt = new Date()

        return report
      })
    
    return queryInterface.bulkInsert(`Reports`, reportData, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete(`Reports`, {}, {})
  }
};
