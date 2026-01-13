const db = require('../db');

// Helper to safely parse JSON fields
function safeParseJson(value) {
  if (value == null) return [];
  try {
    return typeof value === 'string' ? JSON.parse(value) : value;
  } catch (e) {
    return [];
  }
}

module.exports = {
  createProduct: async ({ productName, productType, productCategory, logo, description, points = [], variants = [] }) => {
    const insertQuery = `
      INSERT INTO products (productName, productType, productCategory, logo, description, points, variants)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const [result] = await db.pool.execute(insertQuery, [
      productName,
      productType,
      productCategory,
      logo,
      description,
      JSON.stringify(points),
      JSON.stringify(variants)
    ]);
    return { insertId: result.insertId };
  },

  getProducts: async ({ category, type, limit }) => {
    let query = 'SELECT * FROM products WHERE 1=1';
    const params = [];
    if (category) {
      query += ' AND productCategory = ?';
      params.push(category);
    }
    if (type) {
      query += ' AND productType = ?';
      params.push(type);
    }
    query += ' ORDER BY created_at DESC';
    if (limit) {
      query += ' LIMIT ?';
      params.push(parseInt(limit));
    }

    const [rows] = await db.pool.execute(query, params);
    const products = rows.map(p => ({
      ...p,
      points: Array.isArray(safeParseJson(p.points)) ? safeParseJson(p.points) : [],
      variants: Array.isArray(safeParseJson(p.variants)) ? safeParseJson(p.variants) : []
    }));
    return products;
  },

  getProductById: async (id) => {
    const [rows] = await db.pool.execute('SELECT * FROM products WHERE id = ?', [id]);
    if (rows.length === 0) return null;
    const p = rows[0];
    return {
      ...p,
      points: Array.isArray(safeParseJson(p.points)) ? safeParseJson(p.points) : [],
      variants: Array.isArray(safeParseJson(p.variants)) ? safeParseJson(p.variants) : []
    };
  },

  updateProduct: async (id, { productName, productType, productCategory, logo, description, points = [], variants = [] }) => {
    const updateQuery = `
      UPDATE products SET productName = ?, productType = ?, productCategory = ?, logo = ?, description = ?, points = ?, variants = ? WHERE id = ?
    `;
    const [result] = await db.pool.execute(updateQuery, [
      productName,
      productType,
      productCategory,
      logo,
      description,
      JSON.stringify(points),
      JSON.stringify(variants),
      id
    ]);
    return result;
  },

  deleteProduct: async (id) => {
    const [result] = await db.pool.execute('DELETE FROM products WHERE id = ?', [id]);
    return result;
  }
};
