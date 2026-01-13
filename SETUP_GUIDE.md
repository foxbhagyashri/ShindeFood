# 🚀 Shinde Foods - Complete Setup Guide

## Backend + Frontend Integration

---

## 📋 Prerequisites

1. **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
2. **MySQL Server** (v8.0 or higher) - [Download](https://dev.mysql.com/downloads/mysql/)
3. **Git** (optional)

---

## 🗄️ Step 1: Setup MySQL Database

### Option A: Create Database Manually
```sql
CREATE DATABASE shindefoods;
```

### Option B: Let Backend Auto-Create
The backend will automatically create the database and tables on first run.

---

## 🔧 Step 2: Install Backend

```bash
# Navigate to backend folder
cd "d:\Fox_aircom\Shinde Food\backend"

# Install dependencies
npm install

# Verify .env file exists with correct credentials:
# PORT=5000
# DB_HOST=127.0.0.1
# DB_USER=root
# DB_PASSWORD=Pass@1234
# DB_NAME=shindefoods
```

---

## ▶️ Step 3: Start Backend Server

```bash
# From backend folder
npm start

# OR for development with auto-restart
npm run dev
```

**Expected Output:**
```
✅ MySQL Database connected successfully
✅ Database table "products" is ready
========================================
🚀 Shinde Foods Backend Server Started
========================================
📡 Server running on: http://localhost:5000
🗄️  Database: shindefoods
⏰ Started at: [timestamp]
========================================
```

**Test the API:**
Open browser: `http://localhost:5000`

---

## 🎨 Step 4: Start Frontend

```bash
# Open NEW terminal
cd "d:\Fox_aircom\Shinde Food\frontend"

# Install dependencies (if not done)
npm install

# Start development server
npm run dev
```

Frontend will run on: `http://localhost:5174`

---

## ✅ Step 5: Test the Integration

1. **Navigate to Admin Page:**
   - Go to: `http://localhost:5174/admin` (or your admin route)

2. **Fill the Form:**
   - Product Name: "Frozen Chicken Momos"
   - Product Type: Select "Frozen Food"
   - Product Category: Click "Frozen Snacks"
   - Product Logo: Select "🥟 Dumpling"
   - Description: "Delicious authentic momos"
   - Add Points: 
     - "100% Natural"
     - "No Preservatives"
     - "Ready in 10 mins"

3. **Submit Form:**
   - Click "Add Product"
   - Should see: ✅ Product added successfully!

4. **Verify in Database:**
   ```sql
   USE shindefoods;
   SELECT * FROM products;
   ```

---

## 🔌 API Endpoints Available

### Create Product
```http
POST http://localhost:5000/api/products
Content-Type: application/json

{
  "productName": "Frozen Veg Momos",
  "productType": "Frozen Food",
  "productCategory": "Frozen Snacks",
  "logo": "🥟",
  "description": "Fresh vegetable filling with authentic spices",
  "points": [
    "100% Vegetarian",
    "No MSG",
    "Blast frozen for freshness"
  ]
}
```

### Get All Products
```http
GET http://localhost:5000/api/products
```

### Get Single Product
```http
GET http://localhost:5000/api/products/1
```

### Delete Product
```http
DELETE http://localhost:5000/api/products/1
```

---

## 📁 Project Structure

```
d:\Fox_aircom\Shinde Food\
│
├── backend/
│   ├── server.js              ✅ Express server
│   ├── db.js                  ✅ MySQL connection
│   ├── routes/
│   │   └── products.js        ✅ API routes
│   ├── .env                   ✅ Environment config
│   ├── package.json           ✅ Dependencies
│   └── README.md              ✅ Backend docs
│
└── frontend/
    ├── src/
    │   └── Components/
    │       └── Page/
    │           └── Admin.jsx  ✅ Admin form (UPDATED)
    └── package.json
```

---

## 🐛 Troubleshooting

### ❌ MySQL Connection Failed
```
Error: connect ECONNREFUSED 127.0.0.1:3306
```
**Solution:** Start MySQL server
```bash
# Windows
net start MySQL80

# Or use MySQL Workbench/XAMPP
```

### ❌ Database Access Denied
```
Error: Access denied for user 'root'@'localhost'
```
**Solution:** Check `.env` file password matches MySQL root password

### ❌ Frontend Cannot Connect to Backend
```
Failed to fetch
```
**Solutions:**
1. Ensure backend is running on port 5000
2. Check browser console for CORS errors
3. Verify API URL: `http://localhost:5000/api/products`

### ❌ Port 5000 Already in Use
```
Error: listen EADDRINUSE: address already in use :::5000
```
**Solution:** Change port in `.env`:
```
PORT=5001
```
And update frontend API URL in Admin.jsx

---

## 🎯 Quick Test Commands

### Test Backend Health
```bash
curl http://localhost:5000/health
```

### Test Product Creation
```bash
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "productName": "Test Product",
    "productType": "Frozen Food",
    "productCategory": "Frozen Snacks",
    "logo": "🍕",
    "description": "Test description",
    "points": ["Point 1", "Point 2"]
  }'
```

### View All Products
```bash
curl http://localhost:5000/api/products
```

---

## ✨ Features Implemented

✅ Complete REST API for products  
✅ MySQL database with auto-initialization  
✅ Form validation (frontend + backend)  
✅ Error handling  
✅ CORS enabled  
✅ JSON storage for dynamic points  
✅ Category filtering support  
✅ Production-ready code structure  
✅ No image upload (text-only as requested)  

---

## 🚀 Next Steps (Optional)

1. **Add Admin Route** in `App.jsx`:
   ```jsx
   import Admin from './Components/Page/Admin';
   
   <Route path="/admin" element={<Admin />} />
   ```

2. **Create Products Display Page** to show all products from API

3. **Add Edit/Delete functionality** to Admin panel

4. **Deploy Backend** to a cloud service (Heroku, Railway, etc.)

---

## 📞 Support

If you encounter issues:
1. Check both backend and frontend terminals for errors
2. Verify MySQL is running
3. Ensure `.env` credentials are correct
4. Test API endpoints with Postman/curl

---

**Created for Shinde Foods Admin System**  
Backend: Node.js + Express + MySQL  
Frontend: React + Vite  
Database: MySQL 8.0
