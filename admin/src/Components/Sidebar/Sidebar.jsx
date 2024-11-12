import React from 'react';

function Sidebar() {
  return (
    <div className="h-full w-64 bg-gray-800 text-white flex flex-col">
      <div className="flex justify-center items-center p-4">
        <h1 className="text-2xl font-semibold">Admin Panel</h1>
      </div>
      <ul className="flex-1 space-y-4 px-6 py-4">
        <li><a href="/dashboard" className="hover:bg-gray-700 p-2 rounded">Dashboard</a></li>
        <li><a href="/orders" className="hover:bg-gray-700 p-2 rounded">Orders Side</a></li>
        <li><a href="/products" className="hover:bg-gray-700 p-2 rounded">Products</a></li>
        <li><a href="/settings" className="hover:bg-gray-700 p-2 rounded">Settings</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
