import React from 'react';

function Header() {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">STEM-SOLS</h1>
      <div className="flex items-center space-x-4">
        <button className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700">Logout</button>
      </div>
    </div>
  );
}

export default Header;
