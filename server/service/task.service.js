// const bcrypt = require('bcrypt');
// const TokenService = require('./token.service');
// const UserDto = require('../dto/use.dto');
// const { User } = require('../sequelize/models');
const { Task } = require('../sequelize/models');

class TaskService {
  static async create(title, body, finishDate, userId) {
    const taskId = Number(String(Date.now())
      .slice(-9)) + Math.floor(Math.random() * (999 - 100) + 100);

    const task = await Task.create({
      taskId,
      title,
      body,
      finishDate: finishDate || null,
      status: finishDate ? 1 : 0,
      userId,
    });

    return { task };
  }

  static async edit(taskId, title, body, finishDate) {
    const task = await Task.findOne({ where: { taskId } });

    if (!task) {
      return console.log("task doesn't exist");
    }

    task.title = title;
    task.body = body;
    task.finishDate = finishDate;
    task.status = finishDate ? 1 : 0;

    await task.save();

    return { task };
  }

  static async change_status(taskId, status, finishDate) {
    if (!finishDate && status === 1) {
      return null;
    }
    const task = await Task.findOne({ where: { taskId } });
    if (!task) {
      return null;
    }
    if (finishDate && status === 0) {
      task.finishDate = null;
    }
    task.status = status;
    await task.save();
    return { task };
  }

  static async delete(taskId) {
    const task = await Task.findOne({ where: { taskId } });
    if (!task) {
      return false;
    }
    await task.destroy();
    return true;
  }
}

module.exports = TaskService;
