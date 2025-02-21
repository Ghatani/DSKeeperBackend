const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const { validateRegister, validateLogin } = require('../middlewares/validator');
const loginLimiter = require('../middlewares/rateLimiter');

router.post('/register', validateRegister, register);
router.post('/login', loginLimiter, validateLogin, login);

module.exports = router;
