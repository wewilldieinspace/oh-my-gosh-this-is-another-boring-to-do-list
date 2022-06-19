"use strict";
const Router = require('express').Router;
const userController = require('../controllers/user.controller');
const taskController = require('../controllers/task.controller');
// @ts-ignore
const router = new Router();
const { body } = require('express-validator');
router.post('/registration', body('username').isLength({ min: 1 }), body('password').isLength({ min: 3 }), userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/refresh', userController.refresh);
router.post('/create_task', body('body').isLength({ min: 10, max: 500 }), taskController.createTask);
module.exports = router;
//# sourceMappingURL=index.js.map