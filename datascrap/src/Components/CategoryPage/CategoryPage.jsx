import React from 'react'
import { useParams } from 'react-router-dom'
import { productsData } from '../Server/api' 
import Footer from '../Footer/Footer.jsx'

const CategoryPage = () => {
  const { category } = useParams()

  const products = productsData[category] || []

  return (
    <div className='bg-[#f8a2200c]' >
      <div className="p-7">
      <h1 className="text-3xl text-gray-950 font-bold mb-6"
       style={{
        fontFamily: " Faculty Glyphic, Mona Sans, Roboto, sans-serif" 
       }}
      >Trending in {category.replace(/([A-Z])/g, ' $1').toUpperCase()}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (

        <div className="  rounded-lg shadow-xl border-2  bg-gray-100 flex flex-col"  key={product.id}>
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
          <button className=" px-4 py-2 bg-[#d4af37]  hover:bg-[#b8972f] text-white rounded-lg transition-transform transform hover:scale-105">
            Visit Store
          </button>
        </div>
      </div>

        ))}
      </div></div>
<Footer/>
    </div>
  )
}

export default CategoryPage
