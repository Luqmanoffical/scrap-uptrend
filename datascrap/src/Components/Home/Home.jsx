import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import Hero from "../Hero/Hero";
import Products from '../Products/Products';

function Home() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      {/* Use Link for navigation */}
      <Link to="/hero">
        <button className='m-10'>
          Hero
        </button>
      </Link>

      <Link to="/products">
        <button className='m-10'>
          Product
        </button>
      </Link>
    </div>
  );
}

export default Home;
