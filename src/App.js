import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './modules/Home';
import { Routes, Route } from 'react-router-dom';
import Product from './modules/Product';
import Products from './modules/Products';
import CategoryProducts from './modules/CategoryProducts';
import Cart from './modules/Cart';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories/:name" element={<CategoryProducts />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

