const express = require('express');
const router = express.Router();
const controller = require('../controllers/productsController');
const { requireAdmin } = require('../middleware/authMiddleware');

// Public routes (no authentication required)
// Read all products
router.get('/', controller.getAll);

// Read one product
router.get('/:id', controller.getById);

// Protected routes (require admin authentication)
// Create product
router.post('/', requireAdmin, controller.create);

// Update product
router.put('/:id', requireAdmin, controller.update);

// Delete product
router.delete('/:id', requireAdmin, controller.delete);

module.exports = router;
