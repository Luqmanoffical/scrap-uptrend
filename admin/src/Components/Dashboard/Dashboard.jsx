import React from 'react';
import { FiAlignLeft, FiAlignRight, FiHome, FiPackage, FiSettings, FiBarChart2 } from 'react-icons/fi';
import { IoIosLink } from "react-icons/io";
import { FaShareAlt , FaDollarSign, FaUserAlt } from 'react-icons/fa';

function Dashboard() {
  // Get the current hour
  const hour = new Date().getHours();

  // Determine the time of day and set the greeting
  const getGreeting = () => {
    if (hour < 12) return "Good Morning!";
    if (hour < 18) return "Good Afternoon!";
    return "Good Evening!";
  };

  return (
    <div className="p-6">
      {/* Time-based welcome message */}
      <h2 className="text-3xl font-semibold text-gray-800">{getGreeting()}</h2>
      <p className="mt-2 text-lg">Welcome to your dashboard. Here you can view your overall performance and manage your affiliate account.</p>

      {/* Cards section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Card 1: Dashboard */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between  hover:bg-gray-50 transition-all transform group hover:scale-105">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Visits</h3>
            <p className="mt-2 text-gray-600">Monitor the number of visits and engagement on your affiliate links.</p>
          </div>
          <FaUserAlt className="text-3xl text-blue-500" />
        </div>

        {/* Card 2: Statistics */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between  hover:bg-gray-50 transition-all transform group hover:scale-105">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Statistics</h3>
            <p className="mt-2 text-gray-600">Analyze your data and performance.</p>
          </div>
          <FiBarChart2 className="text-3xl text-green-500" />
        </div>

        {/* Card 3: Payouts */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between  hover:bg-gray-50 transition-all transform group hover:scale-105">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Payouts</h3>
            <p className="mt-2 text-gray-600">Manage and track your affiliate payouts.</p>
          </div>
          <FaDollarSign className="text-3xl text-yellow-500" />
        </div>

        {/* Card 4: Refer */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between  hover:bg-gray-50 transition-all transform group hover:scale-105">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Referrals</h3>
            <p className="mt-2 text-gray-600">Track your referrals and their performance.</p>
          </div>
          <FaShareAlt className="text-3xl text-red-500" />
        </div>

        {/* Card 5: Creatives */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between  hover:bg-gray-50 transition-all transform group hover:scale-105">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Creatives</h3>
            <p className="mt-2 text-gray-600">Manage your marketing assets.</p>
          </div>
          <FiPackage className="text-3xl text-purple-500" />
        </div>

        {/* Card 6: Settings */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between  hover:bg-gray-50 transition-all transform group hover:scale-105">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Settings</h3>
            <p className="mt-2 text-gray-600">Configure your account and preferences.</p>
          </div>
          <FiSettings className="text-3xl text-gray-600" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
