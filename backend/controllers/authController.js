const bcrypt = require('bcryptjs');

// Hardcoded admin credentials
const ADMIN_USER = {
  username: 'admin',
  // Password: Pass@1234 (hashed with bcrypt)
  passwordHash: '$2a$10$XqZ5xGxJxYvK5qYW5xGxJO5xGxJxYvK5qYW5xGxJxYvK5qYW5xGx.' // We'll update this
};

// Hash the password on server start
const hashPassword = async () => {
  const hash = await bcrypt.hash('Pass@1234', 10);
  ADMIN_USER.passwordHash = hash;
  console.log('✅ Admin credentials initialized');
};

// Initialize password hash
hashPassword();

// Login function
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validation
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: 'Username and password are required'
      });
    }

    // Check username
    if (username !== ADMIN_USER.username) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, ADMIN_USER.passwordHash);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Create session
    req.session.isAuthenticated = true;
    req.session.user = {
      username: ADMIN_USER.username,
      role: 'admin'
    };

    // Save session and send response
    req.session.save((err) => {
      if (err) {
        console.error('Session save error:', err);
        return res.status(500).json({
          success: false,
          message: 'Failed to create session'
        });
      }

      res.status(200).json({
        success: true,
        message: 'Login successful',
        user: {
          username: ADMIN_USER.username,
          role: 'admin'
        }
      });
    });

  } catch (error) {
    console.error('❌ Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Login failed. Please try again.'
    });
  }
};

// Logout function
const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Session destroy error:', err);
      return res.status(500).json({
        success: false,
        message: 'Logout failed'
      });
    }

    res.clearCookie('connect.sid'); // Clear session cookie
    res.status(200).json({
      success: true,
      message: 'Logout successful'
    });
  });
};

// Check authentication status
const checkAuth = (req, res) => {
  if (req.session && req.session.isAuthenticated) {
    res.status(200).json({
      success: true,
      isAuthenticated: true,
      user: req.session.user
    });
  } else {
    res.status(401).json({
      success: false,
      isAuthenticated: false,
      message: 'Not authenticated'
    });
  }
};

module.exports = {
  login,
  logout,
  checkAuth
};
