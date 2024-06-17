import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductsList from './pages/ProductsList';
import ProductDetail from './pages/ProductDetail';
import CartList from './pages/CartList';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/category/:category' element={<ProductsList />}></Route>
        <Route path='/product/:productId' element={<ProductDetail />}></Route>
        <Route path='/cart' element={<CartList />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
