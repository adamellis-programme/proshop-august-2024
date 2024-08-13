import express from 'express'
const router = express.Router()

import { getProducts, getProductById } from '../controllers/productController.js'
import checkObjectId from '../middleware/checkObjectId.js'
router.route('/').get(getProducts)
router.route('/:id').get(checkObjectId, getProductById)

export default router
