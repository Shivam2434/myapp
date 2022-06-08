const router = require('express').Router();
const AuthController = require('../../Controller/authController');
const Middleware = require('../../Services/middleware/validator').validate;

router.post('/login', Middleware, AuthController.login);
router.post('/signup', Middleware, AuthController.signup);
router.post('/create/result', Middleware, AuthController.CreateNewResult);

module.exports = router