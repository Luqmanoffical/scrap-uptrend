import React, { useEffect, useState } from 'react';
import Footer from "../Footer/Footer";
import "../Css/Home.css";
import { getSearch } from "../Server/api";

function Search() {
  const [serchProducts, setSerchProducts] = useState([]); 

  useEffect(() => {
    const fetchQuery = async () => {
      try {
        const searchProducts = await getSearch(); 
        setSerchProducts(searchProducts); 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchQuery(); // Call the fetch function
  }, []);

  const handleProductClick = (productId) => {
    console.log(`Product clicked: ${productId}`);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {serchProducts.length == 0 ? (
          <p>No products found based on your Search.</p>
        ) : (
          serchProducts.map((product) => (
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
      <Footer />
    </div>
  );
}

export default Search;
