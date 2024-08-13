// GOOD PRACTICES WE HAVE TO DO OUR SELVES MVC
import asyncHandler from '../middleware/asyncHandler.js'
import Product from '../models/productModel.js'
// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    return res.json(product)
  }
  // this will throw a cast html error
  // test in postman with id of 1 (does not exist)
  // res.status(404).json({ message: 'Product not found' })
  res.status(404)
  throw new Error('Resource not found')
})

export { getProducts, getProductById }
