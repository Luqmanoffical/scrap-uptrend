import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';

function Layout({ children }) {
  return (
    <div className="flex h-screen">
      
      <Sidebar />
      <div className="flex-1 flex flex-col">
        
        <Header />
        <main className="flex-1 bg-gray-100 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;