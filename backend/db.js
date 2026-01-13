const mysql = require('mysql2/promise');
require('dotenv').config();

// Create connection pool WITHOUT database first (to create database)
const createPool = (includeDatabase = true) => {
  const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
  };

  if (includeDatabase) {
    config.database = process.env.DB_NAME;
  }

  return mysql.createPool(config);
};

let pool;

// Get pool instance (lazy initialization safe)
const getPool = () => {
  if (!pool) {
    throw new Error('Database pool not initialized. Call testConnection() first.');
  }
  return pool;
};

// Test database connection and create database if needed
const testConnection = async () => {
  try {
    // First, connect without database to create it
    const tempPool = createPool(false);
    const connection = await tempPool.getConnection();
    
    // Create database if not exists
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`);
    console.log(`✅ Database '${process.env.DB_NAME}' is ready`);
    
    connection.release();
    await tempPool.end();
    
    // Now create pool with database
    pool = createPool(true);
    
    // Test connection with database
    const dbConnection = await pool.getConnection();
    console.log('✅ MySQL Database connected successfully');
    dbConnection.release();
    
  } catch (error) {
    console.error('❌ MySQL connection failed:', error.message);
    process.exit(1);
  }
};

// Initialize database and create table if not exists
const initializeDatabase = async () => {
  try {
    const connection = await pool.getConnection();
    
    // Create products table
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        productName VARCHAR(255) NOT NULL,
        productType VARCHAR(100) NOT NULL,
        productCategory VARCHAR(100) NOT NULL,
        description TEXT NOT NULL,
        logo VARCHAR(16) NOT NULL,
        points JSON NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        INDEX idx_category (productCategory),
        INDEX idx_type (productType)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `;
    
    await connection.query(createTableQuery);
    console.log('✅ Database table "products" is ready');
    
    connection.release();
  } catch (error) {
    console.error('❌ Database initialization failed:', error.message);
    process.exit(1);
  }
};

module.exports = {
  get pool() {
    return getPool();
  },
  testConnection,
  initializeDatabase
};
