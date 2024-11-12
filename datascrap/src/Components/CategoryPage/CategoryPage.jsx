
// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { productsData } from '../Server/api';
// import Footer from '../Footer/Footer.jsx';
// import { FaFilter } from "react-icons/fa";
// import Navbar from '../Hero/Hero.jsx';
// import { BiDetail } from "react-icons/bi";


// const CategoryPage = () => {
//   const { category } = useParams();
//   const navigate = useNavigate();

//   const products = productsData[category] || [];

  
//   const [minPrice, setMinPrice] = useState(0);
//   const [maxPrice, setMaxPrice] = useState(10000);
//   const [onlyFreeShipping, setOnlyFreeShipping] = useState(false);
//   const [showFilters, setShowFilters] = useState(false); 

//   const handleProductClick = (productId) => {
//     navigate(`/product/${productId}`);
//   };

// const isPriceInRange = (product) => {
//   const productPrice = parseFloat(product.price.replace('$',"").replace(/,/g, ''));
//   return productPrice >= minPrice && productPrice <= maxPrice;
// };
// const filteredProducts = products.filter((product) => {
//   const withinPriceRange = isPriceInRange(product);
//   const isFreeShipping = onlyFreeShipping ? product.shippingFee === 'Free' : true;
//   return withinPriceRange && isFreeShipping;
// });


//   return (
//     <div className="bg-gray-200 ">
//       <Navbar/>
//       <div className="p-14">
//         <div className='flex justify-between'>
//         <h1
//           className="text-3xl text-gray-950 font-bold mb-6"
//           style={{
//             fontFamily: 'Faculty Glyphic, Mona Sans, Roboto, sans-serif',
//           }}
//         >
//           {category.replace(/([A-Z])/g, ' $1').toUpperCase()}
//         </h1>

        
//           <button
//             className="px-4 py-2 bg-[#d4af37] hover:bg-[#b8972f] text-white rounded-lg mb-4 transition-transform transform hover:scale-105"
//             onClick={() => setShowFilters(!showFilters)}
//           >
//             {showFilters ? <FaFilter /> : <FaFilter />}
//           </button>
// </div>
// <div>
        
//           {showFilters && (
//             <div className="bg-white p-4 rounded-lg shadow-md">
//               <h2 className="text-xl font-semibold mb-4">Filter Products</h2>
//               <div className="flex space-x-4">
//                 <div>
//                   <label className="block text-sm font-medium mb-2">Price Range</label>
//                   <div className="flex space-x-2">
//                     <input
//                       type="number"
//                       className="px-2 py-1 border rounded"
//                       value={minPrice}
//                       onChange={(e) => setMinPrice(e.target.value ? Number(e.target.value) : 0)}
//                       placeholder="Min"
//                     />
//                     <input
//                       type="number"
//                       className="px-2 py-1 border rounded"
//                       value={maxPrice}
//                       onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : 1000)}
//                       placeholder="Max"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-2">Free Shipping</label>
//                   <input
//                     type="checkbox"
//                     className="w-4 h-4"
//                     checked={onlyFreeShipping}
//                     onChange={() => setOnlyFreeShipping((prev) => !prev)}
//                   />
//                   <span className="ml-2">Only show free shipping</span>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
//           {filteredProducts.length === 0 ? (
//             <p>No products found based on your filters.</p>
//           ) : (
//             filteredProducts.map((product) => (
//               <div 
//               className="rounded-lg flex flex-col relative group" 
            
//               key={product.id}
//             >
//               <div className="relative w-full h-40 overflow-hidden rounded-md">
//                 <img
//                   // onClick={handleProductClick}
//                   className="w-full h-full object-cover transition-transform transform hover:scale-105"
//                   src={product.image}
//                   alt={product.name}
//                 />
//                 <div className="absolute bottom-2 right-2">
//                   <button
//                        onClick={() => handleProductClick(product.id)}
//                     className="p-2 bg-white text-gray-800 rounded-full shadow transition-colors hover:bg-black hover:text-white"
//                   >
//                     <BiDetail size={20} />
//                   </button>
//                 </div>
//               </div>
//               <div className="p-3 flex-1">
//                 <h3 className="text-sm" style={{ fontFamily: "Faculty Glyphic, Mona Sans, Roboto, sans-serif" }}>
//                   {product.name}
//                 </h3>
//                 <div>
//                   <span className="text-black">
//                     {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
//                   </span>
//                 </div>
//                 <div>
//                   <span className="text-lg font-bold">{product.price}</span> <br />
//                   <span className="text-xs text-gray-500">Shipping: {product.shippingFee}</span>
//                 </div>
//               </div>
            
//               {/* Button Section, with hover effect on the entire card */}
//               <div className="px-3 flex justify-between relative group-hover:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <button className=" bg-black rounded-2xl text-sm text-white font-semibold hover:bg-white hover:text-black border-2 px-3 py-2 border-black  pointer-events-none group-hover:pointer-events-auto">
//                   Visit Store
//                 </button>
//               </div>
//             </div>
//             ))
//           )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default CategoryPage;


import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productsData } from '../Server/api';
import Footer from '../Footer/Footer.jsx';
import { FaFilter } from "react-icons/fa";
import Navbar from '../Hero/Hero.jsx';
import { BiDetail } from "react-icons/bi";

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const products = productsData[category] || [];

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [onlyFreeShipping, setOnlyFreeShipping] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const isPriceInRange = (product) => {
    const productPrice = parseFloat(product.price.replace('$', "").replace(/,/g, ''));
    return productPrice >= minPrice && productPrice <= maxPrice;
  };

  const filteredProducts = products.filter((product) => {
    const withinPriceRange = isPriceInRange(product);
    const isFreeShipping = onlyFreeShipping ? product.shippingFee === 'Free' : true;
    return withinPriceRange && isFreeShipping;
  });

  return (
    <div className="bg-gray-200 relative">
      <Navbar />
      <div className="p-14">
        <div className="flex justify-between">
          <h1
            className="text-3xl text-gray-950 font-bold mb-6"
            style={{
              fontFamily: 'Faculty Glyphic, Mona Sans, Roboto, sans-serif',
            }}
          >
            {category.replace(/([A-Z])/g, ' $1').toUpperCase()}
          </h1>

          {/* Filter Button */}
          <button
            className="px-4 py-2 bg-[#d4af37] hover:bg-[#b8972f] text-white rounded-lg mb-4 transition-transform transform hover:scale-105 relative z-20"
            onMouseEnter={() => setShowFilters(true)}  // Open dropdown on hover
            onMouseLeave={() => setShowFilters(false)} // Close dropdown on hover out
          >
            <FaFilter />
            {/* Dropdown Menu */}
            {showFilters && (
              <div className="absolute top-12 right-0 bg-[#3a3939f5] shadow-lg text-white rounded-md p-4 w-96 z-30">
                <h2 className="text-xl font-semibold mb-4">Filter Products</h2>
                <div className="flex flex-col space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 ">Price Range</label>
                    <div className="flex flex-col space-y-4">
                    <div className='flex'> 
                    <label className=" self-center text-sm font-medium px-5 ">Min Price</label>
                    <input
                        type="number"
                        className="px-2 text-black py-1 border rounded"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value ? Number(e.target.value) : 0)}
                        placeholder="Min"
                      />
                    
                    </div>
                    <div className='flex'>
                    <label className=" self-center  text-sm font-medium px-5 ">Max Price</label>
                   
                      <input
                        type="number"
                        className="px-2 py-1 border text-black  rounded"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : 10000)}
                        placeholder="Max"
                      /></div>
                    </div>
                  </div>

                  <div className='flex justify-start items-center px-5'>
                    <input
                      type="checkbox"
                      className="w-4 h-4"
                      checked={onlyFreeShipping}
                      onChange={() => setOnlyFreeShipping((prev) => !prev)}
                    />
                    <span className="ml-2 flex self-center">Free Shipping</span>
                  </div>
                </div>
              </div>
            )}
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredProducts.length === 0 ? (
            <p>No products found based on your filters.</p>
          ) : (
            filteredProducts.map((product) => (
              <div
                className="rounded-lg flex flex-col relative group"
                key={product.id}
              >
                <div className="relative w-full h-40 overflow-hidden rounded-md">
                  <img
                    className="w-full h-full object-cover transition-transform transform hover:scale-105"
                    src={product.image}
                    alt={product.name}
                  />
                  <div className="absolute bottom-2 right-2">
                    <button
                      onClick={() => handleProductClick(product.id)}
                      className="p-2 bg-white text-gray-800 rounded-full shadow transition-colors hover:bg-black hover:text-white"
                    >
                      <BiDetail size={20} />
                    </button>
                  </div>
                </div>
                <div className="p-3 flex-1">
                  <h3 className="text-sm" style={{ fontFamily: "Faculty Glyphic, Mona Sans, Roboto, sans-serif" }}>
                    {product.name}
                  </h3>
                  <div>
                    <span className="text-black">
                      {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
                    </span>
                  </div>
                  <div>
                    <span className="text-lg font-bold">{product.price}</span> <br />
                    <span className="text-xs text-gray-500">Shipping: {product.shippingFee}</span>
                  </div>
                </div>

                {/* Button Section */}
                <div className="px-3 flex justify-between relative group-hover:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className=" bg-black rounded-2xl text-sm text-white font-semibold hover:bg-white hover:text-black border-2 px-3 py-2 border-black  pointer-events-none group-hover:pointer-events-auto">
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
