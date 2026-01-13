const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const { testConnection, initializeDatabase } = require('./db');
const productsRouter = require('./routes/products');
const contactRouter = require('./routes/contact');
const authRouter = require('./routes/auth');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// ========================================
// Middleware
// ========================================
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175', 'http://localhost:3000'],
  credentials: true // Important for cookies
}));

// Cookie parser middleware
app.use(cookieParser());

// Session middleware
app.use(session({
  secret: process.env.SESSION_SECRET || 'shinde-foods-secret-key-2024',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // Set to true in production with HTTPS
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// ========================================
// Routes
// ========================================

// Health check route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Shinde Foods API Server is running',
    timestamp: new Date().toISOString(),
    endpoints: {
      auth: '/api/auth',
      products: '/api/products',
      contact: '/api/contact',
      health: '/health'
    }
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    success: true,
    status: 'healthy',
    database: 'connected',
    timestamp: new Date().toISOString()
  });
});

// Mount authentication router
app.use('/api/auth', authRouter);

// Mount products router
app.use('/api/products', productsRouter);

// Mount contact router
app.use('/api/contact', contactRouter);

// ========================================
// Error Handling
// ========================================

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    path: req.path
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('❌ Server Error:', err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

// ========================================
// Start Server
// ========================================
const startServer = async () => {
  try {
    // Test database connection
    await testConnection();
    
    // Initialize database and create tables
    await initializeDatabase();
    
    // Start Express server
    app.listen(PORT, () => {
      console.log('');
      console.log('========================================');
      console.log('🚀 Shinde Foods Backend Server Started');
      console.log('========================================');
      console.log(`📡 Server running on: http://localhost:${PORT}`);
      console.log(`🗄️  Database: ${process.env.DB_NAME}`);
      console.log(`⏰ Started at: ${new Date().toLocaleString()}`);
      console.log('========================================');
      console.log('');
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

// Handle uncaught errors
process.on('uncaughtException', (error) => {
  console.error('❌ Uncaught Exception:', error);
  process.exit(1);
});

process.on('unhandledRejection', (error) => {
  console.error('❌ Unhandled Rejection:', error);
  process.exit(1);
});

// Start the server
startServer();
