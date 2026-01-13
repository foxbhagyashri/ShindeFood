const axios = require('axios');

const product = {
  logo: '🫓',
  productName: 'Parathas (All Variants)',
  productType: 'Frozen Food',
  productCategory: 'Frozen Breads',
  variants: [
    'Aloo (Potato)',
    'Gobi (Cauliflower)',
    'Mooli (Radish)',
    'Mix Veg',
    'Mushroom'
  ],
  description: 'Flaky layered texture with generous flavorful filling, made using traditional recipes',
  points: [
    'IQF technology',
    'Cook in minutes',
    'Authentic taste',
    'Multiple variants'
  ]
};

(async () => {
  try {
    console.log('Adding Parathas product...');
    console.log('Product data:', JSON.stringify(product, null, 2));
    
    const response = await axios.post('http://localhost:5000/api/products', product, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    console.log('\n✅ Product added successfully!');
    console.log('Response:', JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error('\n❌ Error adding product:');
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    } else {
      console.error('Error:', error.message);
    }
  }
})();
