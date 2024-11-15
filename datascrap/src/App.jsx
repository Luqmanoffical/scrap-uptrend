import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Hero from './Components/Hero/Hero';
import Products from './Components/Products/Products';
import CategoryPage from './Components/CategoryPage/CategoryPage';
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from './Components/ScrollToTop';
import ProductDetail from "./Components/Products/ProductDetail"

function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/products" element={<Products />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
