import React, { useState } from 'react';
import { FiAlignLeft, FiAlignRight, FiHome, FiPackage, FiSettings, FiBarChart2 } from 'react-icons/fi';
import { IoIosLink } from "react-icons/io";
import { FaShareAlt , FaDollarSign, FaUserAlt } from 'react-icons/fa';
import {Link} from "react-router-dom";
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
        {isOpen && <h1 className="text-2xl font-semibold"></h1>}
      </div>
      
      <ul className="flex-1 space-y-4 px-6 py-4">
        <li>
          <Link to="/dashboard" className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded">
            <FiHome />
            {isOpen && <span>Dashboard</span>}
          </Link>
        </li>
        <li>
          <Link to="/affilate" className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded">
          <IoIosLink />

            {isOpen && <span>Affilate URLs</span>}
          </Link>
        </li>
        <li>
          <Link to="/statistics" className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded">
          <FiBarChart2 />
            {isOpen && <span>Statistics</span>}
          </Link>
        </li>
        
        <li>
          <Link to="/referrals" className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded">
            <FaShareAlt />
            {isOpen && <span>Referrals</span>}
          </Link>
        </li>
        <li>
          <Link to="/payouts" className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded">
            <FaDollarSign />
            {isOpen && <span>Payouts</span>}
          </Link>
        </li>
        
        <li>
          <Link to="/visits" className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded">
            <FaUserAlt />
            {isOpen && <span>Visits</span>}
          </Link>
        </li>
        
        <li>
          <Link to="/creatives" className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded">
            <FiPackage />
            {isOpen && <span>Creatives</span>}
          </Link>
        </li>
        <li>
          <Link to="/settings" className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded">
            <FiSettings />
            {isOpen && <span>Settings</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
