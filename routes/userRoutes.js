const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;

