const bcrypt = require('bcrypt');
// const uuid = require('uuid');
const tokenService = require('./token.service');
const UserDto = require('../dto/use.dto');
const { User } = require('../sequelize/models');

class UserService {
  static async registration(username, password) {
    const isFree = await this.check(username);

    if (!isFree) {
      throw console.log('User already exists!!!!');
    }

    const hashPassword = await bcrypt.hash(password, 3);
    const user = await User.create({ name: username, password: hashPassword });

    const userDto = new UserDto(user.dataValues);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  static async login(username, password) {
    const user = await User.findOne({ where: { name: username } });

    if (!user) {
      throw console.log('User not found');
    }

    const isPasswordActive = await bcrypt.compare(password, user.dataValues.password);

    if (!isPasswordActive) {
      throw console.log('Incorrect password');
    }

    const userDto = new UserDto(user.dataValues);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  static async check(username) {
    const user = await User.findOne({ where: { name: username } });
    if (user) {
      return false;
    }
    return true;
  }

  static async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  static getUser(refreshToken) {
    const userData = tokenService.validateRefreshToken(refreshToken);
    if (!userData) {
      return null;
    }

    return userData;
  }

  static async refresh(refreshToken) {
    if (!refreshToken) {
      throw console.log('server error');
    }

    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);

    if (!userData || !tokenFromDb) {
      return null;
    }

    const user = await User.findByPk(userData.id);
    const userDto = new UserDto(user.dataValues);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }
}

module.exports = UserService;
