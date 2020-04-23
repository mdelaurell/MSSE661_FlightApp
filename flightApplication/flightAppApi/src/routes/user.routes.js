const express = require('express');

const {getMe, updateMe} = require('../controllers/user.controller');
const verifyToken = require('../middleware/auth.middleware');

const userRoutes = express.Router();

userRoutes.get('/me', verifyToken, getMe);

userRoutes.post('/me/update', verifyToken, updateMe);

module.exports = userRoutes;