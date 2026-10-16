import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import Product from './Components/Product';
import Footer from './Components/Footer';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Product products={products} />
      </main>
      <Footer />
    </div>
  );
};

export default App;