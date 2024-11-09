import React from 'react'
import { useNavigate } from 'react-router-dom'
import {productsData} from "../Server/api.js"
import Footer from '../Footer/Footer.jsx'


const ProductCard = ({ product }) => (
    <div className="  rounded-lg shadow-xl border-2 bg-gray-100 flex flex-col" data-aos="fade-up" data-aos-delay={product.id * 200} key={product.id}>
    <img className="w-full h-48 object-cover  overflow-hidden transition-transform transform hover:scale-105  rounded-t-md" src={product.image} alt={product.name} />
    <div className="p-3 flex-1">
      <h3 className="text-lg font-semibold"
      style={{
        fontFamily: " Faculty Glyphic, Mona Sans, Roboto, sans-serif" 
       }}
      >{product.name}</h3>
      <p className="text-sm text-gray-500">{product.description}</p>
      <div>
        <span className="text-lg font-bold">{product.price}</span> <br />
        <span className="text-xs text-gray-500">Shipping: {product.shippingFee}</span>
      </div>
      <div>
        <span className="text-yellow-500">
          {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
        </span>
      </div>
    </div>
    <div className="p-3  flex justify-between">
      <button className=" px-4 py-2 bg-[#d4af37]  hover:bg-[#b8972f] text-white rounded-lg transition-transform transform hover:scale-105" >
        Visit Store
      </button>
    </div>
  </div>
  
)

const Products = () => {
  const navigate = useNavigate()

  const handleExploreMore = (category) => {
    navigate(`/category/${category}`)
  }
//   bg-[#ffebcd]
  return (
    <div className="  bg-[#f8a2200c] ">
<div className='px-4'>
{/*  */}
<div className="pt-12">
         <h1   style={{
        fontFamily: " Faculty Glyphic, Mona Sans, Roboto, sans-serif" 
       }} className="text-2xl font-bold mb-4">Trending in Electronics items</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsData.electronics.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className='flex justify-center items-center'>
        <button
          onClick={() => handleExploreMore('electronics')}
          className="mt-8 bg-[#d4af37]  hover:bg-[#b8972f] text-white  py-2 px-4 hover:underline"
        >
          Explore More
        </button>
    
        </div>
      </div>


{/*  */}
<div className="mt-12">
         <h1   style={{
        fontFamily: " Faculty Glyphic, Mona Sans, Roboto, sans-serif" 
       }} className="text-2xl font-bold mb-4">Trending in Clothing items</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsData.clothing.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className='flex justify-center items-center'>
        <button
          onClick={() => handleExploreMore('clothing')}
           className="mt-8 bg-[#d4af37]  hover:bg-[#b8972f] text-white  py-2 px-4 hover:underline"
        >
          Explore More
        </button>
      </div>
      </div>
      
{/*  */}
<div className="mt-12">
         <h1   style={{
        fontFamily: " Faculty Glyphic, Mona Sans, Roboto, sans-serif" 
       }} className="text-2xl font-bold mb-4">Trending in Home Appliances items</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsData.home_appliances.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className='flex justify-center items-center'>

        <button
          onClick={() => handleExploreMore('home_appliances')}
           className="mt-8 bg-[#d4af37]  hover:bg-[#b8972f] text-white  py-2 px-4 hover:underline"
        >
          Explore More
        </button>
      </div>
      </div>
      
{/*  */}
<div className="mt-12">
         <h1   style={{
        fontFamily: " Faculty Glyphic, Mona Sans, Roboto, sans-serif" 
       }} className="text-2xl font-bold mb-4">Trending in Sports items</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsData.sports.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className='flex justify-center items-center'>
        <button
          onClick={() => handleExploreMore('sports')}
           className="mt-8 bg-[#d4af37]  hover:bg-[#b8972f] text-white  py-2 px-4 hover:underline"
        >
          Explore More
        </button>
        </div>
        </div>
      
{/*  */}
<div className="mt-12">
         <h1   style={{
        fontFamily: " Faculty Glyphic, Mona Sans, Roboto, sans-serif" 
       }} className="text-2xl font-bold mb-4">Trending in Beauty Products items</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsData.beauty.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className='flex justify-center items-center'>
        <button
          onClick={() => handleExploreMore('beauty')}
           className="mt-8 bg-[#d4af37]  hover:bg-[#b8972f] text-white  py-2 px-4 hover:underline"
        >
          Explore More
        </button>
        </div>
        </div>
      
{/*  */}
<div className="mt-12">
         <h1   style={{
        fontFamily: " Faculty Glyphic, Mona Sans, Roboto, sans-serif" 
       }} className="text-2xl font-bold mb-4">Trending in Books items</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsData.books.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className='flex justify-center items-center'>
        <button
          onClick={() => handleExploreMore('books')}
           className="mt-8 bg-[#d4af37]  hover:bg-[#b8972f] text-white  py-2 px-4 hover:underline"
        >
          Explore More
        </button>
      </div>
      </div>
      
{/*  */}
<div className="mt-12">
         <h1   style={{
        fontFamily: " Faculty Glyphic, Mona Sans, Roboto, sans-serif" 
       }} className="text-2xl font-bold mb-4">Trending in Toys items</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsData.toys.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className='flex justify-center items-center'>
        <button
          onClick={() => handleExploreMore('toys')}
           className="mt-8 bg-[#d4af37]  hover:bg-[#b8972f] text-white  py-2 px-4 hover:underline"
        >
          Explore More
        </button>
        </div>
        </div>
 

 {/*  */}
<div className="mt-12">
         <h1   style={{
        fontFamily: " Faculty Glyphic, Mona Sans, Roboto, sans-serif" 
       }} className="text-2xl font-bold mb-4">Trending in Furniture items</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsData.furniture.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className='flex justify-center items-center'>
        <button
          onClick={() => handleExploreMore('furniture')}
           className="mt-8 bg-[#d4af37]  hover:bg-[#b8972f] text-white  py-2 px-4 hover:underline"
        >
          Explore More
        </button>
      </div>

      </div>

      {/*  */}
      <div>
         <h1   style={{
        fontFamily: " Faculty Glyphic, Mona Sans, Roboto, sans-serif" 
       }} className="text-2xl font-bold mb-4">Trending in Food </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsData.food.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className='flex justify-center items-center'>
        <button
          onClick={() => handleExploreMore('food')}
           className="mt-8 bg-[#d4af37]  hover:bg-[#b8972f] text-white  py-2 px-4 hover:underline"
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
