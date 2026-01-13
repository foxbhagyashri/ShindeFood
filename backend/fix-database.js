const mysql = require('mysql2/promise');
require('dotenv').config();

async function fixDatabase() {
  try {
    const conn = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });

    console.log('✅ Connected to database');

    // Get all products
    const [rows] = await conn.execute('SELECT id, productName, points FROM products');
    console.log(`\nFound ${rows.length} products:\n`);

    let fixedCount = 0;
    for (const row of rows) {
      console.log('-----------------------------------');
      console.log(`ID: ${row.id}`);
      console.log(`Name: ${row.productName}`);
      console.log(`Points (raw): ${row.points}`);

      // Try to parse points
      let isValid = true;
      try {
        const parsed = JSON.parse(row.points);
        console.log('✅ Valid JSON:', parsed);
      } catch (err) {
        console.log('❌ Invalid JSON detected!');
        isValid = false;

        // Try to fix it - assume it's a simple string that should be in an array
        let fixedPoints = [];
        if (typeof row.points === 'string') {
          // If it looks like comma-separated values, split them
          if (row.points.includes(',')) {
            fixedPoints = row.points.split(',').map(p => p.trim()).filter(p => p.length > 0);
          } else {
            // Single value, wrap in array
            fixedPoints = [row.points.trim()];
          }
        }

        const fixedJSON = JSON.stringify(fixedPoints);
        console.log('🔧 Fixed to:', fixedJSON);

        // Update the database
        await conn.execute(
          'UPDATE products SET points = ? WHERE id = ?',
          [fixedJSON, row.id]
        );
        fixedCount++;
        console.log('✅ Updated in database');
      }
    }

    console.log('\n===================================');
    console.log(`Fixed ${fixedCount} products with invalid JSON`);
    console.log('===================================\n');

    await conn.end();
  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  }
}

fixDatabase();
