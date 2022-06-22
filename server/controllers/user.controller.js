const { validationResult } = require('express-validator');
const UserService = require('../service/user.service');

class UserController {
  static async checkTheUser(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return console.log('validation server error');
      }
      const { username } = req.body;
      const isFree = await UserService.check(username);
      return res.json({ isFree });
    } catch (e) {
      return console.log('server error');
    }
  }

  static async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return console.log('validation server error');
      }
      const { username, password } = req.body;
      const userData = await UserService.registration(username, password);
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
      return res.json(userData);
    } catch (e) {
      return console.log('registration server error');
    }
  }

  static async login(req, res) {
    try {
      const { username, password } = req.body;
      const userData = await UserService.login(username, password);
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
      return res.json(userData);
    } catch (e) {
      return console.log('login server error');
    }
  }

  static async logout(req, res) {
    try {
      const { refreshToken } = req.cookies;
      const token = await UserService.logout(refreshToken);
      res.clearCookie('refreshToken');
      return res.json(token);
    } catch (e) {
      return console.log('logout server error');
    }
  }

  static async refresh(req, res) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await UserService.refresh(refreshToken);
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
      return res.json(userData);
    } catch (e) {
      return console.log('refresh token server error');
    }
  }
}

module.exports = UserController;
