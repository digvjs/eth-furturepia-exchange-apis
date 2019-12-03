'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('order_book', {
      
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('order_book');
  }
};
