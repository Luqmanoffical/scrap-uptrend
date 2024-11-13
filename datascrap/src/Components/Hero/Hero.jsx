import React, { useState } from "react";
import {
  FaBars, FaTimes, FaSearch, FaTshirt, FaLaptop, FaShoePrints,
  FaHatCowboy, FaGift, FaBox, FaClock, FaHeadphones,
  FaHeart, FaMobileAlt, FaStar, FaCogs
} from "react-icons/fa";
import Image1 from "../../assets/women.png";
import Image2 from "../../assets/shopping.png";
import Image3 from "../../assets/sale.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountUp from "react-countup";
import "../Css/Home.css";
import { useNavigate } from "react-router-dom";
import VideoSection from "./VideoSection";
import mens from "../../assets/mens.webp";
import footwear from "../../assets/footwear.webp";
import access from "../../assets/access.jpg";
import gifts from "../../assets/gifts.jpg";
import watches from "../../assets/watches.jpg";
import mobile from "../../assets/mobile.webp";
import headphone from "../../assets/headphone.jpeg";
import health from "../../assets/health.jpeg";
import Navbar from "../Header/Header";

const slidesData = [
  { id: 1, img: Image1, title: "Upto 50% off on all Men's Wear", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 2, img: Image2, title: "30% off on all Women's Wear", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 3, img: Image3, title: "70% off on all Products Sale", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

const Slide = ({ img, title, description, handleOrderPopup }) => (
  <div className="flex flex-row w-full items-center justify-between gap-4">
    <div className="flex-1 flex flex-col items-start text-left justify-center relative z-10 max-w-xs sm:max-w-sm lg:max-w-md">
      <h1 className="text-base sm:text-4xl lg:text-5xl font-bold">{title}</h1>
      <p className="text-lg mt-4">{description}</p>
      <div className="mt-6">
        <button onClick={handleOrderPopup} className="gradient-button">
          Order Now
        </button>
      </div>
    </div>
    <div className="flex-1 flex justify-center items-center">
      <img src={img} alt={title} className="w-[200px] sm:w-[250px] lg:w-[300px] object-contain mx-auto" />
    </div>
  </div>
);

const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] lg:min-h-[300px] sm:min-h-[650px] bg-[#ff5b2ecb] flex justify-center items-center">
      {/* Background Shape 1 */}
      <div className="h-[750px] w-[750px] bg-gradient-to-r from-[#ff5c2e] via-[#ff5c2e] absolute -inset-y-8 -right-32 -top-60 rounded-3xl transform rotate-45 z-0"></div>
      {/* Background Shape 2 */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 opacity-40 z-0"></div>
      <div className="container pb-8 sm:pb-0 relative z-10">
        <Slider {...settings}>
          {slidesData.map((slide) => (
            <Slide
              key={slide.id}
              img={slide.img}
              title={slide.title}
              description={slide.description}
              handleOrderPopup={handleOrderPopup}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero handleOrderPopup={() => {}} />
      <div className="bg-[#c8c9cab2]">
        <div className="container mx-auto flex flex-col items-center p-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
            {[
              { image: mens, label: "Men's Wear" },
              { image: mens, label: "Electronics" },
              { image: footwear, label: "Footwear" },
              { image: access, label: "Accessories" },
              { image: gifts, label: "Gifts" },
              { image: mens, label: "Home" },
              { image: watches, label: "Watches" },
              { image: headphone, label: "Headphones" },
              { image: health, label: "Health" },
              { image: mobile, label: "Mobile Phones" },
            ].map((category, index) => (
              <div
                key={index}
                className="relative group h-60 lg:h-80 w-full overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={category.image}
                  alt={category.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90"></div>
                {/* Centered Label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white bg-opacity-90 text-gray-900 text-lg font-semibold rounded-full py-1 px-4 shadow-md transition duration-300 transform group-hover:scale-110 group-hover:bg-opacity-100">
                    {category.label}
                  </span>
                </div>
                {/* Bottom CTA */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-90 text-center text-white font-medium text-sm tracking-wide transition-all duration-300 ease-in-out transform group-hover:translate-y-0 translate-y-full">
                  Explore {category.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-200 py-12 mt-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Explore Millions of Offerings Tailored to Your Business Needs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-16">
            {[
              { number: 200, label: "Products", description: "A wide range of high-quality products" },
              { number: 17, label: "Suppliers", description: "A robust network of trusted suppliers" },
              { number: 32, label: "Product Categories", description: "Diverse categories for every need" },
              { number: 4, label: "Countries & Regions", description: "Global reach and partnerships" }
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white rounded-2xl shadow-md p-8 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-100"
              >
                <h3 className="text-3xl font-bold text-[#ce7948] mb-4">
                  <CountUp end={item.number} duration={2.5} separator="," />
                </h3>
                <p className="text-lg font-medium text-gray-700 mb-2">{item.label}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <VideoSection />
    </div>
  );
};

export default Home;
