import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSearchQuery = () => {
    console.log(searchQuery);
    // Add navigate logic here if needed
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="relative overflow-x-hidden">
      <nav className="flex justify-between items-center bg-[#e84416] p-4 text-white h-20">
        <div className="logo flex items-center space-x-2">
          <img src={logo} className="h-10" alt="UpTrend logo" />
          <h1 className="text-xl font-bold">UpTrend.</h1>
        </div>
        <div className="flex space-x-6 text-md font-poppins ml-10">
          <a href="#" className="hover:text-gray-400">Best Seller</a>
          <a href="#" className="hover:text-gray-400">5 Star Rated</a>
          <a href="#" className="hover:text-gray-400">11.11 Sale</a>
          <a href="#" className="hover:text-gray-400">New Arrival</a>
          <a href="#" className="hover:text-gray-400">Categories</a>
        </div>
        <div className="flex-1 flex justify-start mx-8">
          <div className="relative w-full sm:w-96">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for products..."
              className="w-full pl-12 pr-7 py-2 rounded-full bg-white text-black focus:outline-none"
            />
            <button onClick={handleSearchQuery} className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <FaSearch size={20} color="black" />
            </button>
          </div>
        </div>
        <div>
          <a href="#" className="hover:text-gray-400 mr-5">Order & Accounts</a>
          <a href="#" className="hover:text-gray-400">Support</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
