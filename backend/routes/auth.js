const express = require('express');
const router = express.Router();
const { login, logout, checkAuth } = require('../controllers/authController');

// POST: Login
router.post('/login', login);

// POST: Logout
router.post('/logout', logout);

// GET: Check authentication status
router.get('/check', checkAuth);

module.exports = router;
