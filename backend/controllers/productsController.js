const Product = require('../models/productModel');

// Validate required product fields
function validateRequiredFields(body) {
  const { productName, productType, productCategory, logo, description } = body;
  return productName && productType && productCategory && logo && description;
}

exports.create = async (req, res) => {
  try {
    if (!validateRequiredFields(req.body)) {
      return res.status(400).json({ success: false, message: 'Missing required fields: productName, productType, productCategory, logo, description' });
    }

    const validPoints = Array.isArray(req.body.points) ? req.body.points.filter(p => p && String(p).trim().length > 0) : [];
    const validVariants = Array.isArray(req.body.variants) ? req.body.variants.filter(v => v && String(v).trim().length > 0) : [];

    const { insertId } = await Product.createProduct({
      productName: req.body.productName,
      productType: req.body.productType,
      productCategory: req.body.productCategory,
      logo: req.body.logo,
      description: req.body.description,
      points: validPoints,
      variants: validVariants
    });

    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      id: insertId,
      product: {
        id: insertId,
        productName: req.body.productName,
        productType: req.body.productType,
        productCategory: req.body.productCategory,
        logo: req.body.logo,
        description: req.body.description,
        points: validPoints,
        variants: validVariants
      }
    });
  } catch (error) {
    console.error('❌ Error creating product:', error);
    res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const products = await Product.getProducts({ category: req.query.category, type: req.query.type, limit: req.query.limit });
    res.status(200).json({ success: true, count: products.length, data: products });
  } catch (error) {
    console.error('❌ Error fetching products:', error);
    res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const product = await Product.getProductById(req.params.id);
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    res.status(200).json({ success: true, product });
  } catch (error) {
    console.error('❌ Error fetching product:', error);
    res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const validPoints = Array.isArray(req.body.points) ? req.body.points.filter(p => p && String(p).trim().length > 0) : [];
    const validVariants = Array.isArray(req.body.variants) ? req.body.variants.filter(v => v && String(v).trim().length > 0) : [];

    const result = await Product.updateProduct(req.params.id, {
      productName: req.body.productName,
      productType: req.body.productType,
      productCategory: req.body.productCategory,
      logo: req.body.logo,
      description: req.body.description,
      points: validPoints,
      variants: validVariants
    });

    if (result.affectedRows === 0) return res.status(404).json({ success: false, message: 'Product not found' });
    res.status(200).json({ success: true, message: 'Product updated successfully' });
  } catch (error) {
    console.error('❌ Error updating product:', error);
    res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const result = await Product.deleteProduct(req.params.id);
    if (result.affectedRows === 0) return res.status(404).json({ success: false, message: 'Product not found' });
    res.status(200).json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
    console.error('❌ Error deleting product:', error);
    res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
  }
};
