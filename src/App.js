import './App.css';
import {useEffect, useState} from 'react';
import { Route, Routes } from "react-router-dom";
import { NavbarComponent } from './components/NavbarComponent/NavbarComponent';
import { FooterComponent } from './components/FooterComponent/FooterComponent';
import { IndexComponent } from './components/IndexComponent/IndexComponent';
import { ProductOverviewComponent } from './components/ProductOverviewComponent/ProductOverviewComponent';
import { CartComponent } from './components/CartComponent/CartComponent';

function App() {
  const [products, setProducts] = useState([]);
  const [cart] = useState([]);

  useEffect(() => {
    fetch('products.json')
    .then(r => r.json())
    .then(prods => {
        prods.forEach(p => {
            p.cart = false;
        });
        setProducts(prods)
    })
  }, []);

  return (
      <div>
        <NavbarComponent itemCounter={cart} />
        <Routes>
        <Route path="/" element={<IndexComponent cartItems={cart} />}></Route>
        <Route path="/products" element={<ProductOverviewComponent products={products} cartItems={cart} />}></Route>
        <Route path="/cart" element={<CartComponent cartItems={cart} />}></Route>
        </Routes>
        <FooterComponent />
      </div>
  );
}

export default App;
