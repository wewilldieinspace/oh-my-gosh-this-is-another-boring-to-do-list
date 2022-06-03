'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      task_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      title: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      body: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      start_date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
      finish_date: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          isAfter: new Date(),
        }
      },
      user: {
        type: Sequelize.INTEGER,
        model: 'Users',
        key: 'id',
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: true
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: null,
        allowNull: true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tasks');
  }
};