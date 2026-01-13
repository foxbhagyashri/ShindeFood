# Shinde Foods Backend API

Production-ready Node.js + Express + MySQL backend for Shinde Foods Admin Panel.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Create `.env` file (already created):
```
PORT=5000
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=Pass@1234
DB_NAME=shindefoods
```

### 3. Start MySQL Server
Ensure MySQL is running on your system.

### 4. Run Server
```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

Server will automatically:
- Connect to MySQL
- Create `shindefoods` database (if needed)
- Create `products` table (if needed)
- Start on port 5000

## 📡 API Endpoints

### Base URL
```
http://localhost:5000
```

### Health Check
```http
GET /
GET /health
```

### Products API

#### Create Product
```http
POST /api/products
Content-Type: application/json

{
  "productName": "Frozen Chicken Momos",
  "productType": "Frozen Food",
  "productCategory": "Frozen Snacks",
  "logo": "🥟",
  "description": "Delicious chicken momos with authentic spices",
  "points": [
    "100% Natural Ingredients",
    "No Preservatives",
    "Ready in 10 minutes",
    "Authentic taste"
  ]
}
```

**Response:**
```json
{
  "success": true,
  "message": "Product created successfully",
  "id": 1,
  "product": {
    "id": 1,
    "productName": "Frozen Chicken Momos",
    "productType": "Frozen Food",
    "productCategory": "Frozen Snacks",
    "logo": "🥟",
    "description": "Delicious chicken momos with authentic spices",
    "points": ["100% Natural Ingredients", "No Preservatives", ...]
  }
}
```

#### Get All Products
```http
GET /api/products
GET /api/products?category=Frozen Snacks
GET /api/products?type=Frozen Food
GET /api/products?limit=10
```

**Response:**
```json
{
  "success": true,
  "count": 5,
  "products": [...]
}
```

#### Get Single Product
```http
GET /api/products/:id
```

#### Delete Product
```http
DELETE /api/products/:id
```

## 🗄️ Database Schema

### Products Table
```sql
CREATE TABLE products (
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
);
```

## 📁 Project Structure
```
backend/
├── server.js           # Express server & startup
├── db.js              # MySQL connection pool
├── routes/
│   └── products.js    # Products API routes
├── .env               # Environment variables
├── .gitignore         # Git ignore rules
├── package.json       # Dependencies
└── README.md          # Documentation
```

## 🔒 Security Features
- CORS enabled for localhost origins
- Prepared SQL statements (prevents SQL injection)
- Input validation
- Error handling
- Environment variables for sensitive data

## 🛠️ Technologies
- **Express.js** - Web framework
- **MySQL2** - Database with Promise support
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment configuration

## 📝 Notes
- No image upload handling (text-only backend)
- Points stored as JSON in MySQL
- Auto-creates database table on startup
- Production-ready error handling
- Clean, modular code structure
