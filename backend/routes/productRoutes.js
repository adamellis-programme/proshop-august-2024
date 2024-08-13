import express from 'express'
const router = express.Router()
import products from '../data/products.js'
import Product from '../models/productModel.js'
import asyncHandler from '../middleware/asyncHandler.js'

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({
      // options
    })

    res.json(products)
  })
)

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
      res.json(product)
    } else {
      // this will throw a cast html error
      // test in postman with id of 1 (does not exist)
      // res.status(404).json({ message: 'Product not found' })
      res.status(404)
      throw new Error('Resource not found')
    }
  })
)

export default router
