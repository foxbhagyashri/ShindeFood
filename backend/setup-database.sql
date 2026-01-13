-- Create database and use it
CREATE DATABASE IF NOT EXISTS shindefoods;
USE shindefoods;

-- Create products table
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

-- Show table structure
DESCRIBE products;
