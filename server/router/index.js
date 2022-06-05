const Router = require('express').Router;
const userController = require('../controllers/user.controller');
const router = new Router();
const {body} = require('express-validator');


router.post('/register', 
    body('username').isLength({ min: 1 }),
    body('password').isLength({ min: 3 }),
    userController.register
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/refresh', userController.refresh);

module.exports = router