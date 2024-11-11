import React from 'react';
import shoppingads from '../../assets/shoppingads.mp4'

const VideoSection = () => {
  return (
    <div className="relative bg-gray-800 h-[300px]  flex items-center justify-center">
      {/* Background Video */}
      <video
        src={shoppingads} // Update this path to the actual video file path
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-80 "
      />

      {/* Text Overlay */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Discover the Best Deals
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 drop-shadow-lg">
          Shop the latest collections in fashion, electronics, and more!
        </p>
        <button className="gradient-button">
          Start Shopping
        </button>
      </div>

      {/* Dark Overlay for Contrast */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
    </div>
  );
};

export default VideoSection;
