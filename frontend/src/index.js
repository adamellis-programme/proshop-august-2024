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
import RegisterScreen from './screens/registerScreen'

// import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css'

import store from './store/store'
import { Provider } from 'react-redux'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import ShippingScreen from './screens/ShippingScreen';
const router = createBrowserRouter(
  createRoutesFromElements(
    // App gets passed here
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/product/:id" element={<ProductScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />;
      <Route path='/shipping' element={<ShippingScreen />} />;
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      {/* <App /> */}
    </Provider>
  </React.StrictMode>
)
