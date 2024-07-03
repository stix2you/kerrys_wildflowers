import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import Seeds from './components/Seeds';
import CannedProducts from './components/CannedProducts';
import Cart from './components/Cart';
import './App.css';

function App() {
   return (
      <div className="App">
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/seeds" element={<Seeds />} />
            <Route path="/canned-products" element={<CannedProducts />} />
            <Route path="/cart" element={<Cart />} />
         </Routes>
      </div>
   );
}

export default App;
