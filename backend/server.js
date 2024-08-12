import express from 'express'
import dotenv from 'dotenv'
dotenv.config() // call above where we uer the variables
const app = express()
const port = process.env.PORT || 5001 // fallback
import products from './data/products.js'

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
