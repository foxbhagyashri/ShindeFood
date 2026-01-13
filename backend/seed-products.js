const axios = require('axios');
const mysql = require('mysql2/promise');
require('dotenv').config();

const API_URL = process.env.API_URL || 'http://localhost:5000/api/products';

const products = [
  {
    logo: '🥟',
    productName: 'Frozen Veg Momos',
    productType: 'Frozen Food',
    productCategory: 'Frozen Snacks',
    variants: ['Classic Veg','Mushroom','Peas & Corn','Paneer'],
    description: 'Delicate thin wrapper with fresh vegetable filling, seasoned with proprietary spice mix',
    points: ['No preservatives','Partly steamed & blast frozen','12 months shelf life','Free from harmful additives']
  },
  {
    logo: '🍗',
    productName: 'Frozen Chicken Momos',
    productType: 'Frozen Food',
    productCategory: 'Frozen Snacks',
    variants: ['Classic Chicken','Chicken Tikka','Chicken Reshmi'],
    description: 'Premium minced chicken with fresh vegetables and aromatic spices',
    points: ['Machine-made consistency','High-quality ingredients','Natural taste','25 pieces per pack']
  },
  {
    logo: '🌶️',
    productName: 'Schezwan Momos',
    productType: 'Frozen Food',
    productCategory: 'Frozen Snacks',
    variants: ['Veg Schezwan','Chicken Schezwan'],
    description: 'Bold fusion of traditional dumplings with fiery Schezwan flavors',
    points: ['Tangy & spicy','Special Schezwan sauce','Trendy product','Perfect balance of textures']
  },
  {
    logo: '🥙',
    productName: 'Samosas',
    productType: 'Frozen Food',
    productCategory: 'Frozen Snacks',
    variants: ['Punjabi','Regular'],
    description: 'Iconic Indian snack with crispy golden shell and spiced potato-peas filling',
    points: ['Large size option','Robust flavor','Quick preparation','Traditional recipe']
  },
  {
    logo: '🍟',
    productName: 'French Fries',
    productType: 'Frozen Food',
    productCategory: 'Frozen Snacks',
    variants: ['Regular Cut','Crinkle Cut','Wedges'],
    description: 'Premium quality potato fries with perfect golden crisp texture',
    points: ['Grade-A potatoes','Pre-blanched','Multiple cuts','Restaurant quality']
  },
  {
    logo: '🍔',
    productName: 'Patties',
    productType: 'Frozen Food',
    productCategory: 'Frozen Snacks',
    variants: ['Aloo Tikki','Veg Cutlet','Chicken Cutlet'],
    description: 'Crispy breaded patties with flavorful vegetable or chicken filling',
    points: ['Crispy coating','Fresh ingredients','Ready to fry','Perfect for burgers']
  },
  {
    logo: '🌯',
    productName: 'Spring Rolls',
    productType: 'Frozen Food',
    productCategory: 'Frozen Snacks',
    variants: ['Vegetable'],
    description: 'Crispy exterior with flavorful vegetable filling of cabbage, carrots, and beansprouts',
    points: ['Thin delicate pastry','Fresh vegetables','Golden crispy texture','Various sizes available']
  },
  {
    logo: '🍗',
    productName: 'Nuggets',
    productType: 'Frozen Food',
    productCategory: 'Frozen Snacks',
    variants: ['Chicken'],
    description: 'Tender chicken with crispy golden breadcrumb coating',
    points: ['Good protein source','No artificial colors','Pre-cooked','Multiple cooking methods']
  },
  {
    logo: '🫓',
    productName: 'Parathas (All Variants)',
    productType: 'Frozen Food',
    productCategory: 'Frozen Breads',
    variants: ['Aloo (Potato)','Gobi (Cauliflower)','Mooli (Radish)','Mix Veg','Mushroom'],
    description: 'Flaky layered texture with generous flavorful filling, made using traditional recipes',
    points: ['IQF technology','Cook in minutes','Authentic taste','Multiple variants']
  },
  {
    logo: '🌽',
    productName: 'Frozen Sweet Corn',
    productType: 'Frozen Food',
    productCategory: 'Frozen Vegetables',
    variants: ['Premium'],
    description: 'Sweet and juicy corn kernels frozen at peak ripeness',
    points: ['No additives','Year-round availability','Crisp texture','Versatile ingredient']
  },
  {
    logo: '🥗',
    productName: 'Frozen Mix Veg',
    productType: 'Frozen Food',
    productCategory: 'Frozen Vegetables',
    variants: ['Premium Blend'],
    description: 'Balanced blend of carrots, peas, beans, and cauliflower',
    points: ['Peak freshness','Multiple uses','Time-saving','Nutritious']
  },
  {
    logo: '🫛',
    productName: 'Frozen Green Peas',
    productType: 'Frozen Food',
    productCategory: 'Frozen Vegetables',
    variants: ['Premium'],
    description: 'Sweet and tender peas with vibrant green color',
    points: ['Optimal ripeness','Natural taste','Versatile','Year-round supply']
  }
];

async function postProduct(product) {
  try {
    const res = await axios.post(API_URL, product, { timeout: 5000 });
    return { ok: true, data: res.data };
  } catch (err) {
    return { ok: false, error: err };
  }
}

async function insertDirect(product, conn) {
  const sql = `INSERT INTO products (productName, productType, productCategory, description, logo, points, variants) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  const params = [
    product.productName,
    product.productType,
    product.productCategory,
    product.description,
    product.logo,
    JSON.stringify(product.points || []),
    JSON.stringify(product.variants || [])
  ];
  const [res] = await conn.execute(sql, params);
  return res;
}

(async () => {
  console.log('Seeding products...');
  const results = [];

  for (const p of products) {
    process.stdout.write(`Posting ${p.productName} ... `);
    const r = await postProduct(p);
    if (r.ok && r.data && r.data.success) {
      console.log('OK (API)');
      results.push({ name: p.productName, method: 'api', result: r.data });
      continue;
    }

    // API failed, fallback to direct DB insert
    console.log('API failed, attempting DB insert...');
    try {
      const conn = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
      });
      const res = await insertDirect(p, conn);
      await conn.end();
      console.log('OK (DB)');
      results.push({ name: p.productName, method: 'db', result: res });
    } catch (dbErr) {
      console.error('FAILED', dbErr.message || dbErr);
      results.push({ name: p.productName, method: 'failed', error: dbErr.message || dbErr });
    }
  }

  console.log('\nSummary:');
  results.forEach(r => console.log(`${r.name}: ${r.method}${r.error ? ' - ' + r.error : ''}`));
  process.exit(0);
})();
