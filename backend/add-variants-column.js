const mysql = require('mysql2/promise');
require('dotenv').config();

(async () => {
  try {
    const conn = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });

    // Check if column exists
    const [rows] = await conn.execute(
      `SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = ? AND TABLE_NAME = 'products' AND COLUMN_NAME = 'variants'`,
      [process.env.DB_NAME]
    );

    if (rows.length === 0) {
      console.log('Adding `variants` column to `products` table as nullable...');
      // Add as nullable (some MySQL versions do not allow JSON default values)
      await conn.execute(`ALTER TABLE products ADD COLUMN variants JSON NULL`);
      console.log('Populating existing rows with empty JSON arrays...');
      // Set existing NULL variants to empty JSON array
      await conn.execute(`UPDATE products SET variants = '[]' WHERE variants IS NULL`);
      // Make column NOT NULL now that rows have values
      await conn.execute(`ALTER TABLE products MODIFY COLUMN variants JSON NOT NULL`);
      console.log('✅ `variants` column added and initialized.');
    } else {
      console.log('`variants` column already exists.');
    }

    await conn.end();
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
})();
