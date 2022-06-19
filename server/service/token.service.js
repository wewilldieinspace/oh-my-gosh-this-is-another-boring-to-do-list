const jwt = require('jsonwebtoken');
const { Token } = require('../sequelize/models');

class TokenService {
  static generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS, { expiresIn: '15s' });
    const refreshToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '30s' });
    return {
      accessToken,
      refreshToken,
    };
  }

  static validateAccessToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_ACCESS);
      return userData;
    } catch (e) {
      return null;
    }
  }

  static validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_SECRET);
      return userData;
    } catch (e) {
      return null;
    }
  }

  static async saveToken(userId, refreshToken) {
    const [tokenData, created] = await Token.findOrCreate({
      where: { userId }, defaults: { userId, refreshToken },
    });

    if (!created) {
      tokenData.refreshToken = refreshToken;
      tokenData.save();
    }

    return tokenData.dataValues;
  }

  static async removeToken(refreshToken) {
    const tokenData = await Token.destroy({ where: { refreshToken } });
    return tokenData;
  }

  static async findToken(refreshToken) {
    const tokenData = await Token.findOne({ where: { refreshToken } });
    return tokenData.dataValues;
  }
}

module.exports = TokenService;
