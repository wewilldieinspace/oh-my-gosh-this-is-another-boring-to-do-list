const { Router } = require('express');
const { body } = require('express-validator');
const UserController = require('../controllers/user.controller');
const TaskController = require('../controllers/task.controller');

const router = new Router();

router.post(
  '/check_username',
  body('username').isLength({ min: 1 }),
  UserController.checkTheUser,
);
router.post(
  '/registration',
  body('username').isLength({ min: 1 }),
  body('password').isLength({ min: 3 }),
  UserController.registration,
);
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);
router.get('/refresh', UserController.refresh);
router.post(
  '/create_task',
  body('body').isLength({ min: 10, max: 500 }),
  TaskController.create,
);
router.post(
  '/edit_task',
  body('body').isLength({ min: 10, max: 500 }),
  TaskController.edit,
);
router.post('/change_status', TaskController.change_status);
router.post('/delete_task', TaskController.delete);

module.exports = router;
