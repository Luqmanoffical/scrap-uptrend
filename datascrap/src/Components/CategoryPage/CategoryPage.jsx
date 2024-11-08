import React from 'react'
import { useParams } from 'react-router-dom'
import { productsData } from '../Server/api' 

const CategoryPage = () => {
  const { category } = useParams()

  const products = productsData[category] || []

  return (
    <div className="mx-5 p-4">
      <h1 className="text-3xl font-bold mb-6">Trending in {category.replace(/([A-Z])/g, ' $1').toUpperCase()}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <img className="w-full h-48 object-cover rounded-md" src={product.image} alt={product.name} />
            <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.description}</p>
            <div className="mt-2">
              <span className="text-lg font-bold">{product.price}</span>
              <span className="ml-4 text-gray-500">Shipping: {product.shippingFee}</span>
            </div>
            <div className="mt-2">
              <span className="text-yellow-500">{"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}</span>
            </div>
            <button className="mt-4 w-full py-2 bg-[#fea928] text-white rounded-lg">Visit Store</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryPage
