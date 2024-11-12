import React, { useState } from 'react';
import { FiAlignLeft, FiAlignRight, FiHome, FiPackage, FiSettings, FiShoppingCart } from 'react-icons/fi';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true); // Sidebar open/close state

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`h-full ${isOpen ? 'w-64' : 'w-18'} bg-gray-800 text-white flex flex-col transition-all duration-300`}>
      <div className="flex justify-between items-center p-4">
        {/* Button to toggle the sidebar */}
        <button onClick={toggleSidebar} className="text-2xl">
          {isOpen ? <FiAlignLeft /> : <FiAlignRight />}
        </button>
        {isOpen && <h1 className="text-2xl font-semibold">Admin Panel</h1>}
      </div>
      
      <ul className="flex-1 space-y-4 px-6 py-4">
        <li>
          <a href="/dashboard" className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded">
            <FiHome />
            {isOpen && <span>Dashboard</span>}
          </a>
        </li>
        <li>
          <a href="/orders" className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded">
            <FiShoppingCart />
            {isOpen && <span>Orders</span>}
          </a>
        </li>
        <li>
          <a href="/products" className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded">
            <FiPackage />
            {isOpen && <span>Products</span>}
          </a>
        </li>
        <li>
          <a href="/settings" className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded">
            <FiSettings />
            {isOpen && <span>Settings</span>}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
