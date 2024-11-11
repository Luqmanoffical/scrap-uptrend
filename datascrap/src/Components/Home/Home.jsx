import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import Hero from "../Hero/Hero";
import Products from '../Products/Products';

function Home() {
  return (
    <div >
     <Hero/>
     <Products/>
    </div>
  );
}

export default Home;

