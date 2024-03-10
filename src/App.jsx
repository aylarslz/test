import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import ShoppingCart from './pages/ShoppingCart'
import Shop from './pages/Shop'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import ProductDetails from './pages/ProductDetails'
import Join from './components/home/Join'
import Blog from './pages/Blog'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path='/shop/:slug' element={<ProductDetails />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/forgotpassword' element={<ForgotPassword />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
