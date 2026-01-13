// Middleware to protect routes
const requireAuth = (req, res, next) => {
  if (req.session && req.session.isAuthenticated) {
    // User is authenticated, proceed
    next();
  } else {
    // User is not authenticated
    res.status(401).json({
      success: false,
      message: 'Authentication required. Please login.',
      isAuthenticated: false
    });
  }
};

// Middleware to check if user is admin
const requireAdmin = (req, res, next) => {
  if (req.session && req.session.isAuthenticated && req.session.user.role === 'admin') {
    // User is admin, proceed
    next();
  } else {
    // User is not admin
    res.status(403).json({
      success: false,
      message: 'Admin access required'
    });
  }
};

module.exports = {
  requireAuth,
  requireAdmin
};
