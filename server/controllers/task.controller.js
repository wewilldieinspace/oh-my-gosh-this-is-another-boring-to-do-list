const { validationResult } = require('express-validator');
const UserService = require('../service/user.service');
const TokenService = require('../service/task.service');

class TaskController {
  static async create(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return console.log('incorrect task body');
      }
      const { title, body, finishDate } = req.body;
      const { refreshToken } = req.cookies;
      let user = UserService.getUser(refreshToken);

      if (!user) {
        user = (await UserService.refresh(refreshToken)).user.id;
      }
      // const task = await TokenService.create(title, body, finishDate, 12);
      const task = await TokenService.create(title, body, finishDate, user.id);
      return res.json(task);
    } catch (e) {
      return console.log('create task server error');
    }
  }

  static async edit(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return console.log('incorrect task body');
      }
      const {
        taskId, title, body, finishDate,
      } = req.body;
      const { refreshToken } = req.cookies;
      const user = UserService.getUser(refreshToken);
      if (!user) {
        await UserService.refresh(refreshToken);
      }
      const task = await TokenService.edit(taskId, title, body, finishDate);
      return res.json(task);
    } catch (e) {
      return console.log('create task server error');
    }
  }

  static async change_status(req, res) {
    try {
      const { taskId, status, finishDate } = req.body;
      const { refreshToken } = req.cookies;
      const user = UserService.getUser(refreshToken);
      if (!user) {
        await UserService.refresh(refreshToken);
      }
      const task = await TokenService.change_status(taskId, status, finishDate);
      return res.json(task);
    } catch (error) {
      throw console.log('something went wrong :((');
    }
  }

  static async delete(req, res) {
    try {
      const { taskId } = req.body;
      const { refreshToken } = req.cookies;
      const user = UserService.getUser(refreshToken);
      if (!user) {
        await UserService.refresh(refreshToken);
      }
      const success = await TokenService.delete(taskId);
      return res.json({ success });
    } catch (e) {
      throw console.log('something went wrong :((');
    }
  }
}

module.exports = TaskController;
