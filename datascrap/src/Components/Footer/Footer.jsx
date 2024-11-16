import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundColor: "#FA812F",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Fashion",
    link: "/#",
  },
  {
    title: "Electronics",
    link: "/#about",
  },
  {
    title: "Beauty",
    link: "/#contact",
  },
  {
    title: "Food",
    link: "/#blog",
  },
];

const FooterSupportLinks = [
  {
    title: "Help center",
    link: "/#",
  },
  {
    title: "Terms & services",
    link: "/#",
  },
  {
    title: "Legal",
    link: "/#",
  },
  {
    title: "Privacy policy",
    link: "/#",
  },
  {
    title: "Faq's",
    link: "/#",
  }
];


const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container mx-auto px-4">
        <div data-aos="zoom-in" className="grid gap-5 lg:grid-cols-3 py-8">
          {/* Company details */}
          <div className="py-2 text-center md:text-left">
            <h1 className="text-xl font-bold">
              <img src={""} alt="" className="max-w-[50px]" />
              UPTrend.
            </h1>
            <p className="text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
              beatae ea recusandae blanditiis veritatis.
            </p>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
            <div className="py-2">
              <h1 className="text-lg font-bold mb-3">Support</h1>
              <ul className="flex flex-col gap-2">
                {FooterSupportLinks.map((link) => (
                  <li
                    className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300"
                    key={link.title}
                  >
                    <span>{link.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-2">
              <h1 className="text-lg font-bold mb-3">Important Links</h1>
              <ul className="flex flex-col gap-2">
                {FooterLinks.map((link) => (
                  <li
                    className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300"
                    key={link.title}
                  >
                    <span>{link.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social links */}
            <div className="py-2">
              <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
                <a href="#">
                  <FaInstagram className="text-2xl sm:text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-2xl sm:text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-2xl sm:text-3xl" />
                </a>
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <FaLocationArrow />
                  <p>Glaxit, Punjab Pakistan</p>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <FaMobileAlt />
                  <p>+92-123456789</p>
                </div>
                <p>
                  Design and Develop By{" "}
                  <span
                    style={{
                      fontFamily: "Faculty Glyphic, Mona Sans, Roboto, sans-serif",
                    }}
                    className="font-bold cursor-pointer hover:text-[#1a957a] transition-colors duration-300"
                  >
                    Glaxit
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
