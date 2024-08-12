import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

// import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    // App gets passed here
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path='/product/:id' element={<ProductScreen />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
)
