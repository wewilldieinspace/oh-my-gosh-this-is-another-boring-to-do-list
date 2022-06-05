'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Token extends Model {
    static associate(models) {
    }
  }
  Token.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    refresh_key: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Token',
  });
  return Token;
};