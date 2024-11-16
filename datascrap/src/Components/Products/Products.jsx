import React from 'react'
import { useNavigate } from 'react-router-dom'
import { productsData } from "../Server/api.js"
import Footer from '../Footer/Footer.jsx'
import '../Css/Home.css'
import { BiDetail } from "react-icons/bi";

const ProductCard = ({ product },) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };


  return (


    // <div
    //   className="rounded-lg flex flex-col relative group"
    //   data-aos="fade-up"
    //   data-aos-delay={product.id * 200}
    //   key={product.id}
    // >
    //   <div className="relative w-full h-40 overflow-hidden rounded-md">
    //     <img
    //       // onClick={handleProductClick}
    //       className="w-full h-full object-cover transition-transform transform hover:scale-105"
    //       src={product.image}
    //       alt={product.name}
    //     />
    //     <div className="absolute bottom-2 right-2">
    //       <button
    //         onClick={handleProductClick}
    //         className="p-2 bg-white text-gray-800 rounded-full shadow transition-colors hover:bg-black hover:text-white"
    //       >
    //         <BiDetail size={20} />
    //       </button>
    //     </div>
    //   </div>
    //   <div className="p-3 flex-1">
    //     <h3 className="text-sm" style={{ fontFamily: "Faculty Glyphic, Mona Sans, Roboto, sans-serif" }}>
    //       {product.name}
    //     </h3>
    //     <div>
    //       <span className="text-black">
    //         {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
    //       </span>
    //     </div>
    //     <div>
    //       <span className="text-lg font-bold">{product.price}</span> <br />
    //       <span className="text-xs text-gray-500">Shipping: {product.shippingFee}</span>
    //     </div>
    //   </div>

    //   {/* Button Section, with hover effect on the entire card */}
    //   <div className="px-3 flex justify-between relative group-hover:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    //     <button className=" bg-black rounded-2xl text-sm text-white font-semibold hover:bg-white hover:text-black border-2 px-3 py-2 border-black  pointer-events-none group-hover:pointer-events-auto">
    //       Visit Store
    //     </button>
    //   </div>
    // </div>
    <div
  className="card rounded-lg flex flex-col relative group shadow-lg border hover:shadow-xl transition-shadow overflow-hidden"
  data-aos="fade-up"
  data-aos-delay={product.id * 200}
  key={product.id}
>
  {/* Image Section */}
  <div className="card-header relative w-full h-40 overflow-hidden rounded-t-md">
    <img
      className="w-full h-full object-cover transition-transform transform group-hover:scale-105"
      src={product.image}
      alt={product.name}
    />
  </div>

  {/* Content Section */}
  <div className="card-body p-4 flex flex-col flex-1 group-hover:blur-sm transition-all duration-300">
    <h3
      className="text-sm font-semibold text-gray-800 mb-2"
      style={{ fontFamily: "Faculty Glyphic, Mona Sans, Roboto, sans-serif" }}
    >
      {product.name}
    </h3>
    <div className="flex items-center gap-1 mb-2">
      <span className="text-yellow-400">
        {"★".repeat(product.rating)}
      </span>
      <span className="text-gray-400">
        {"☆".repeat(5 - product.rating)}
      </span>
    </div>
    <div className="text-gray-700 text-sm mb-4">
      <span className="text-lg font-bold text-gray-900">{product.price}</span>
      <br />
      <span className="text-xs">Shipping: {product.shippingFee}</span>
    </div>
  </div>

  {/* Hover Action Section */}
  <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <button className="bg-white text-[#FA812F] text-sm font-semibold rounded-lg py-2 px-6 hover:bg-[#FA812F] hover:text-white border-2 border-[#FA812F]">
      Visit Store
    </button>
  </div>
</div>

  
  


  )
}

const Products = () => {
  const navigate = useNavigate()

  const handleExploreMore = (category) => {
    navigate(`/category/${category}`)
  }


  //   bg-[#ffebcd]
  return (
    <div>
      <div className='px-10 py-5'>
        {/*  Electronics Product Section Start  */}
        <div className="pt-12">
          <h1 style={{
            fontFamily: " Faculty Glyphic, Mona Sans, Roboto, sans-serif"
          }} className="text-2xl font-bold mb-4"> Electronics items</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 py-8">
            {productsData.electronics.slice(0, 6).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className='flex justify-center items-center'>
            <button
              onClick={() => handleExploreMore('electronics')}
              className="gradient-button"
            >
              Explore More
            </button>

          </div>
        </div>
        {/*  Electronics Product Section End  */}


        {/* Clothing Product Section Start */}
        <div className="py-12">
          <h1 style={{
            fontFamily: " Faculty Glyphic, Mona Sans, Roboto, sans-serif"
          }} className="text-2xl font-bold mb-4"> Clothing items</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 py-8">
            {productsData.clothing.slice(0, 6).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className='flex justify-center items-center'>
            <button
              onClick={() => handleExploreMore('clothing')}
              className="gradient-button"
            >
              Explore More
            </button>
          </div>
        </div>
        {/* Clothing Product Section End */}

        {/* Home Appliances Product Section Start */}
        <div className="py-12">
          <h1 style={{
            fontFamily: " Faculty Glyphic, Mona Sans, Roboto, sans-serif"
          }} className="text-2xl font-bold mb-4"> Home Appliances items</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 py-8">
            {productsData.home_appliances.slice(0, 6).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className='flex justify-center items-center'>

            <button
              onClick={() => handleExploreMore('home_appliances')}
              className="gradient-button"
            >
              Explore More
            </button>
          </div>
        </div>
        {/* Home Appliances Product Section End */}

        {/* Sports Product Section Start */}
        <div className="py-12">
          <h1 style={{
            fontFamily: " Faculty Glyphic, Mona Sans, Roboto, sans-serif"
          }} className="text-2xl font-bold mb-4"> Sports items</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 py-8">
            {productsData.sports.slice(0, 6).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className='flex justify-center items-center'>
            <button
              onClick={() => handleExploreMore('sports')}
              className="gradient-button"
            >
              Explore More
            </button>
          </div>
        </div>
        {/* Sports Product Section End */}

        {/* Beauty Product Section Start  */}
        <div className="py-12">
          <h1 style={{
            fontFamily: " Faculty Glyphic, Mona Sans, Roboto, sans-serif"
          }} className="text-2xl font-bold mb-4"> Beauty Products items</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 py-8">
            {productsData.beauty.slice(0, 6).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className='flex justify-center items-center'>
            <button
              onClick={() => handleExploreMore('beauty')}
              className="gradient-button"
            >
              Explore More
            </button>
          </div>
        </div>
        {/* Beauty Product Section End  */}

        {/* Books Product Section Start  */}
        <div className="py-12">
          <h1 style={{
            fontFamily: " Faculty Glyphic, Mona Sans, Roboto, sans-serif"
          }} className="text-2xl font-bold mb-4"> Books items</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 py-8">
            {productsData.books.slice(0, 6).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className='flex justify-center items-center'>
            <button
              onClick={() => handleExploreMore('books')}
              className="gradient-button"
            >
              Explore More
            </button>
          </div>
        </div>
        {/* Books Product Section End  */}

        {/* Toys Product Section Start */}
        <div className="py-12">
          <h1 style={{
            fontFamily: " Faculty Glyphic, Mona Sans, Roboto, sans-serif"
          }} className="text-2xl font-bold mb-4"> Toys items</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 py-8">
            {productsData.toys.slice(0, 6).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className='flex justify-center items-center'>
            <button
              onClick={() => handleExploreMore('toys')}
              className="gradient-button"
            >
              Explore More
            </button>
          </div>
        </div>
        {/* Toys Product Section End */}


        {/* Furniture Product Section Start */}
        <div className="py-12">
          <h1 style={{
            fontFamily: " Faculty Glyphic, Mona Sans, Roboto, sans-serif"
          }} className="text-2xl font-bold mb-4"> Furniture items</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 py-8">
            {productsData.furniture.slice(0, 6).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className='flex justify-center items-center'>
            <button
              onClick={() => handleExploreMore('furniture')}
              className="gradient-button"
            >
              Explore More
            </button>
          </div>

        </div>
        {/* Furniture Product Section End */}

        {/* Food Product Section Start  */}
        <div className="py-12">
          <h1 style={{
            fontFamily: " Faculty Glyphic, Mona Sans, Roboto, sans-serif"
          }} className="text-2xl font-bold mb-4"> Food </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 py-8">
            {productsData.food.slice(0, 6).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className='flex justify-center items-center'>
            <button
              onClick={() => handleExploreMore('food')}
              className="gradient-button"
            >
              Explore More
            </button>
          </div>
        </div>
        {/* Food Product Section End */}

      </div>
      {/* Footer Section Start */}
      <div className='mt-4'>
        <Footer />
      </div>
      {/* Footer Section End */}
    </div>
  )
}

export default Products
