import React from 'react'
import { useNavigate } from 'react-router-dom'
import {productsData} from "../Server/api.js"
import Footer from '../Footer/Footer.jsx'
import '../Css/Home.css'
import { BiDetail } from "react-icons/bi";

const ProductCard = ({ product } , ) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };


return(
  
  
  <div 
  className="rounded-lg flex flex-col relative group" 
  data-aos="fade-up" 
  data-aos-delay={product.id * 200} 
  key={product.id}
>
  <div className="relative w-full h-40 overflow-hidden rounded-md">
    <img
      // onClick={handleProductClick}
      className="w-full h-full object-cover transition-transform transform hover:scale-105"
      src={product.image}
      alt={product.name}
    />
    <div className="absolute bottom-2 right-2">
      <button
        onClick={handleProductClick}
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

  {/* Button Section, with hover effect on the entire card */}
  <div className="px-3 flex justify-between relative group-hover:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <button className=" bg-black rounded-2xl text-sm text-white font-semibold hover:bg-white hover:text-black border-2 px-3 py-2 border-black  pointer-events-none group-hover:pointer-events-auto">
      Visit Store
    </button>
  </div>
</div>

)}

const Products = () => {
  const navigate = useNavigate()

  const handleExploreMore = (category) => {
    navigate(`/category/${category}`)
  }

  
//   bg-[#ffebcd]
  return (
    <div className="  bg-gray-200  ">
<div className='px-10'>
{/*  */}
<div className="pt-12">
         <h1   style={{
        fontFamily: " Faculty Glyphic, Mona Sans, Roboto, sans-serif" 
       }} className="text-2xl font-bold mb-4"> Electronics items</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
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


{/*  */}
<div className="mt-12">
         <h1   style={{
        fontFamily: " Faculty Glyphic, Mona Sans, Roboto, sans-serif" 
       }} className="text-2xl font-bold mb-4"> Clothing items</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
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
      
{/*  */}
<div className="mt-12">
         <h1   style={{
        fontFamily: " Faculty Glyphic, Mona Sans, Roboto, sans-serif" 
       }} className="text-2xl font-bold mb-4"> Home Appliances items</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
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
      
{/*  */}
<div className="mt-12">
         <h1   style={{
        fontFamily: " Faculty Glyphic, Mona Sans, Roboto, sans-serif" 
       }} className="text-2xl font-bold mb-4"> Sports items</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
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
      
{/*  */}
<div className="mt-12">
         <h1   style={{
        fontFamily: " Faculty Glyphic, Mona Sans, Roboto, sans-serif" 
       }} className="text-2xl font-bold mb-4"> Beauty Products items</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
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
      
{/*  */}
<div className="mt-12">
         <h1   style={{
        fontFamily: " Faculty Glyphic, Mona Sans, Roboto, sans-serif" 
       }} className="text-2xl font-bold mb-4"> Books items</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
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
      
{/*  */}
<div className="mt-12">
         <h1   style={{
        fontFamily: " Faculty Glyphic, Mona Sans, Roboto, sans-serif" 
       }} className="text-2xl font-bold mb-4"> Toys items</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
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
 

 {/*  */}
<div className="mt-12">
         <h1   style={{
        fontFamily: " Faculty Glyphic, Mona Sans, Roboto, sans-serif" 
       }} className="text-2xl font-bold mb-4"> Furniture items</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
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

      {/*  */}
      <div>
         <h1   style={{
        fontFamily: " Faculty Glyphic, Mona Sans, Roboto, sans-serif" 
       }} className="text-2xl font-bold mb-4"> Food </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
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
      </div>      </div>
<div className='mt-4'>
<Footer/>  
</div>
</div>
  )
}

export default Products
