'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      this.belongsTo(models.User)
      models.User.hasMany(this)
    }
  }
  Task.init({
    task_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    title: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 1
      },
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('now')
    },
    finish_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isAfter: Sequelize.fn('now'),
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};