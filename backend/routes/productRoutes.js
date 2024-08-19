import express from 'express'
const router = express.Router()

import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

import checkObjectId from '../middleware/checkObjectId.js'
router.route('/').get(getProducts).post(protect, admin, createProduct)
router
  .route('/:id')
  .get(checkObjectId, getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct)

export default router
