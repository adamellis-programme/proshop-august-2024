import express from 'express'
import dotenv from 'dotenv'
dotenv.config() // call above where we uer the variables
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
const app = express()
const port = process.env.PORT || 5001 // fallback

connectDB() // call at begining of app

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/products', productRoutes)

// make sure under all routes
app.use(notFound)
app.use(errorHandler)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
