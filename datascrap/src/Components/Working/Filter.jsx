// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { productsData } from "../Server/api.js";
// import Products from '../Products/Products';

// function Hero() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const navigate = useNavigate();

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleCategoryChange = (e) => {
//     setSelectedCategory(e.target.value);
//     navigate(`/category/${e.target.value}`);
//   };

//   return (
//     <div>
//       <div className='flex justify-between'>
//         <div>
//           <h1>Logo</h1>
//         </div>

//         <div>
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={handleSearchChange}
//             placeholder="Search products..."
//             className="p-2 border border-gray-400 rounded"
//           />
//         </div>

//         <div>
//           <select
//             value={selectedCategory}
//             onChange={handleCategoryChange}
//             className="p-2 border border-gray-400 rounded"
//           >
//             <option value="">Categories</option>
//             {Object.keys(productsData).map((category) => (
//               <option key={category} value={category}>{category}</option>
//             ))}
//           </select>
//         </div>
//       </div>

//       <div>
//         <Products searchQuery={searchQuery} selectedCategory={selectedCategory} />
//       </div>
//     </div>
//   );
// }

// export default Hero;
// ////////////////////////////////////////////////////////////////


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { productsData } from "../Server/api.js";
// import Footer from '../Footer/Footer.jsx';

// const ProductCard = ({ product }) => {
//   const navigate = useNavigate();

//   const handleProductClick = () => {
//     navigate(`/product/${product.id}`);
//   };

//   return (
//     <div className="rounded-lg shadow-xl border-2 bg-gray-100 flex flex-col" data-aos="fade-up" data-aos-delay={product.id * 200}>
//       <img onClick={handleProductClick} className="w-full h-48 object-cover overflow-hidden transition-transform transform hover:scale-105 rounded-t-md" src={product.image} alt={product.name} />
//       <div className="p-3 flex-1">
//         <h3 className="text-lg font-semibold">{product.name}</h3>
//         <p className="text-sm text-gray-500">{product.description}</p>
//         <div>
//           <span className="text-lg font-bold">{product.price}</span> <br />
//           <span className="text-xs text-gray-500">Shipping: {product.shippingFee}</span>
//         </div>
//         <div>
//           <span className="text-yellow-500">
//             {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
//           </span>
//         </div>
//       </div>
//       <div className="p-3 flex justify-between">
//         <button className="px-4 py-2 bg-[#d4af37] hover:bg-[#b8972f] text-white rounded-lg transition-transform transform hover:scale-105">
//           Visit Store
//         </button>
//       </div>
//     </div>
//   );
// };

// const Products = ({ searchQuery, selectedCategory }) => {
//   const navigate = useNavigate();

//   // Filter products based on search query and category
//   const filterProducts = (category, query) => {
//     let filteredProducts = productsData[category] || [];
    
//     // Search filter
//     if (query) {
//       filteredProducts = filteredProducts.filter((product) =>
//         product.name.toLowerCase().includes(query.toLowerCase()) ||
//         product.description.toLowerCase().includes(query.toLowerCase())
//       );
//     }

//     return filteredProducts;
//   };

//   // Display products for a specific category
//   const productsToDisplay = selectedCategory
//     ? filterProducts(selectedCategory, searchQuery)
//     : Object.values(productsData).flatMap((categoryData) =>
//         filterProducts(Object.keys(productsData).find(key => productsData[key] === categoryData), searchQuery)
//       );

//   const handleExploreMore = (category) => {
//     navigate(`/category/${category}`);
//   };

//   return (
//     <div className="bg-[#f8a2200c]">
//       {Object.keys(productsData).map((category) => (
//         <div key={category} className="mt-12">
//           <h1 className="text-2xl font-bold mb-4" style={{ fontFamily: "Faculty Glyphic, Mona Sans, Roboto, sans-serif" }}>
//             Trending in {category.charAt(0).toUpperCase() + category.slice(1)} items
//           </h1>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {productsToDisplay.length === 0
//               ? <p>No products found.</p>
//               : productsToDisplay.slice(0, 4).map(product => (
//                   <ProductCard key={product.id} product={product} />
//                 ))}
//           </div>
//           <div className='flex justify-center items-center'>
//             <button
//               onClick={() => handleExploreMore(category)}
//               className="mt-8 bg-[#d4af37] hover:bg-[#b8972f] text-white py-2 px-4 hover:underline"
//             >
//               Explore More
//             </button>
//           </div>
//         </div>
//       ))}

//       <div className='mt-4'>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Products;