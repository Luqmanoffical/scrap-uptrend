
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productsData } from '../Server/api';
import Footer from '../Footer/Footer.jsx';
import '../Hero/hero.css'

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  // Initialize product data
  const products = productsData[category] || [];

  // State for filters
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [onlyFreeShipping, setOnlyFreeShipping] = useState(false);
  const [showFilters, setShowFilters] = useState(false); // For showing/hiding the filter dropdown

  // Handle the product click
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  // Function to check if price is within range
  const isPriceInRange = (product) => {
    const productPrice = parseFloat(product.price.replace('$', ''));
    return productPrice >= minPrice && productPrice <= maxPrice;
  };

  // Filter products based on price and free shipping
  const filteredProducts = products.filter((product) => {
    const withinPriceRange = isPriceInRange(product);
    const isFreeShipping = onlyFreeShipping ? product.shippingFee === 'Free' : true;
    return withinPriceRange && isFreeShipping;
  });

  return (
    <div className="bg-[#f8a2200c]">
      <div className="p-7">
        <h1
          className="text-3xl text-gray-950 font-bold mb-6"
          style={{
            fontFamily: 'Faculty Glyphic, Mona Sans, Roboto, sans-serif',
          }}
        >
          Trending in {category.replace(/([A-Z])/g, ' $1').toUpperCase()}
        </h1>

        {/* Filter Button and Dropdown */}
        <div className="mb-6">
          <button
            className="px-4 py-2 bg-[#d4af37] hover:bg-[#b8972f] text-white rounded-lg mb-4 transition-transform transform hover:scale-105"
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>

          {showFilters && (
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Filter Products</h2>
              <div className="flex space-x-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Price Range</label>
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      className="px-2 py-1 border rounded"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value ? Number(e.target.value) : 0)}
                      placeholder="Min"
                    />
                    <input
                      type="number"
                      className="px-2 py-1 border rounded"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : 1000)}
                      placeholder="Max"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Free Shipping</label>
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={onlyFreeShipping}
                    onChange={() => setOnlyFreeShipping((prev) => !prev)}
                  />
                  <span className="ml-2">Only show free shipping</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.length === 0 ? (
            <p>No products found based on your filters.</p>
          ) : (
            filteredProducts.map((product) => (
              <div
                className="rounded-lg shadow-xl border-2 bg-gray-100 flex flex-col"
                key={product.id}
              >
                <img
                  onClick={() => handleProductClick(product.id)}
                  className="w-full h-48 object-cover overflow-hidden transition-transform transform hover:scale-105 rounded-t-md"
                  src={product.image}
                  alt={product.name}
                />
                <div className="p-3 flex-1">
                  <h3
                    className="text-lg font-semibold"
                    style={{
                      fontFamily: 'Faculty Glyphic, Mona Sans, Roboto, sans-serif',
                    }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500">{product.description}</p>
                  <div>
                    <span className="text-lg font-bold">{product.price}</span> <br />
                    <span className="text-xs text-gray-500">Shipping: {product.shippingFee}</span>
                  </div>
                  <div>
                    <span className="text-yellow-500">
                      {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
                    </span>
                  </div>
                </div>
                <div className="p-3 flex justify-between">
                  <button className="px-4 py-2 bg-[#d4af37] hover:bg-[#b8972f] text-white rounded-lg transition-transform transform hover:scale-105">
                    Visit Store
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;
