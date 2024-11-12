import React from 'react';
import { useParams } from 'react-router-dom';
import { productsData } from "../Server/api.js";
import Footer from '../Footer/Footer.jsx';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = Object.values(productsData).flat().find((prod) => prod.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto  p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="flex justify-center">
            <img src={product.image} alt={product.name} className="w-full h-auto max-w-md object-cover rounded-lg" />
          </div>
          {/* Product Details */}
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold">{product.name}</h1>
            <p className="text-lg text-gray-600">{product.description}</p>
            <div className="text-xl font-bold text-gray-950">
              Price: <span className="text-2xl font-bold ">{product.price}</span>
            </div>
            <p className="text-sm text-gray-500">Shipping: {product.shippingFee}</p>
            {product.sizes?  <div className="mt-4">
              <h3 className="text-xl font-medium">Available Sizes:</h3>
          
              <ul className="space-x-2">
                {product.sizes.map((size) => (
                  <li key={size} className="inline-block px-3 py-1 border rounded-full text-sm text-gray-700">{size}</li>
                ))}
              </ul> </div> : ""
           } 
           {product.colors? <div className="mt-4">
              <h3 className="text-xl font-medium">Available Colors:</h3>
            
              <ul className="space-x-2">
                {product.colors.map((color) => (
                  <li key={color} className="inline-block px-3 py-1 border rounded-full text-sm text-gray-700">{color}</li>
                ))}
              </ul> 
            </div>: ""  }
            <div className="mt-6">
              <button className="bg-black  text-sm text-white font-semibold hover:bg-white hover:text-black border-2 px-3 py-2 border-black">
                Visit Store
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
