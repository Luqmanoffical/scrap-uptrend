import React, { useState } from "react";
import {
  FaBars, FaTimes, FaSearch, FaTshirt, FaLaptop, FaShoePrints,
  FaHatCowboy, FaGift, FaBox, FaClock, FaHeadphones,
  FaHeart, FaMobileAlt, FaStar, FaCogs
} from "react-icons/fa";
import logo from '../../assets/logo.png'
import Image1 from "../../assets/women.png";
import Image2 from "../../assets/shopping.png";
import Image3 from "../../assets/sale.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountUp from "react-countup";
import './hero.css';
import VideoSection from "./VideoSection";

const slidesData = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products Sale",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
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
    <div className="relative overflow-hidden min-h-[550px] lg:min-h-[400px] sm:min-h-[650px] bg-gray-200 flex justify-center items-center">
      <div className="h-[750px] w-[750px] bg-gradient-to-r from-[#000000e3] via-[#e49836e3] absolute -inset-y-8 -right-32 -top-40 rounded-3xl transform rotate-45 z-0"></div>
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

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="relative">
  <nav className="flex justify-between items-center bg-gray-800 p-4 text-white h-24">
    <div className="logo flex items-center space-x-2">
      <img src={logo} className="h-10" />
      <h1 className="text-xl font-bold">UpTrend.</h1>
    </div>
    <div className="flex-1 flex justify-center mx-8">
      <div className="relative w-full sm:w-96">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for products..."
          className="w-full pl-12 pr-7 py-4 rounded-full bg-gray-700 text-white focus:outline-none"
        />
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" size={20} />
      </div>
    </div>
    <button onClick={toggleSidebar} className="text-white p-2 rounded-full hover:bg-gray-700">
      {sidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
    </button>
  </nav>

  {/* Sidebar with Animation */}
  <div
    className={`fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-end transform transition-all duration-300 ${
      sidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
    }`}
  >
    <div
      className={`w-64 bg-black text-white p-6 space-y-4 transform transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <h2 className="text-2xl font-bold">Categories</h2>
      <ul>
        <li><a href="#" className="block py-2">Men's Wear</a></li>
        <li><a href="#" className="block py-2">Women's Wear</a></li>
        <li><a href="#" className="block py-2">Accessories</a></li>
        <li><a href="#" className="block py-2">Sale</a></li>
      </ul>
      <button onClick={toggleSidebar} className="absolute top-4 right-4 text-white " >
        <FaTimes size={24} />
      </button>
    </div>
  </div>


      <Hero handleOrderPopup={() => {}} />

      <div className="bg-[#c8c9cab2]">
        <div className="container ml-20">
          <h2 className="text-2xl p-10 font-semibold text-center text-gray-800">
            Shop by Category
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {[
              { icon: <FaTshirt size={30} />, label: "Men's Wear" },
              { icon: <FaLaptop size={30} />, label: "Electronics" },
              { icon: <FaShoePrints size={30} />, label: "Footwear" },
              { icon: <FaHatCowboy size={30} />, label: "Accessories" },
              { icon: <FaGift size={30} />, label: "Gifts" },
              { icon: <FaBox size={30} />, label: "Home" },
              { icon: <FaClock size={30} />, label: "Watches" },
              { icon: <FaHeadphones size={30} />, label: "Headphones" },
              { icon: <FaHeart size={30} />, label: "Health" },
              { icon: <FaMobileAlt size={30} />, label: "Mobile Phones" },
              { icon: <FaStar size={30} />, label: "Top Rated" },
              { icon: <FaCogs size={30} />, label: "Tools" },
              { icon: <FaHeart size={30} />, label: "Health" },
              { icon: <FaMobileAlt size={30} />, label: "Mobile Phones" },
              { icon: <FaStar size={30} />, label: "Top Rated" },
              { icon: <FaCogs size={30} />, label: "Tools" }
            ].map((category, index) => (
              <div key={index} className="flex flex-col items-center text-gray-800">
                <div className="p-4 bg-gray-200 rounded-full shadow-lg mb-2">
                  {category.icon}
                </div>
                <span className="text-sm font-medium">{category.label}</span>
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
      <VideoSection/>
    </div>
  );
};

export default Navbar;
