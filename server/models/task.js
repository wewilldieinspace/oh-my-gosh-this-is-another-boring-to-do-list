'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User)
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
    user: {
      type: DataTypes.INTEGER,
      references: 'User',
      referencesKey: 'id',
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};