import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Cart from './pages/Cart/Cart'
import Categories from './pages/Categories/Categories'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

function Program() {
  return (
    <div>
        <Router>
        <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        </Routes>
        </Router>
    </div>
  )
}

export default Program