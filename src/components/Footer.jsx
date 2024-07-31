import React from "react";
import logo from "../assets/logo.png";
import logo1 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import { Link } from "react-scroll";
import { navArray } from "../store/services-store";

const Footer = () => {
  return (
    <div className="bg-gray-700 text-white p-8 w-full">
      {/* Section: Links */}
      <section className="container mx-auto flex flex-col md:flex-row  lg:flex-row justify-between  md:items-center">
        {/* Column 1 */}
        <div className="mb-6 text-left md:mb-0 md:w-1/4">
          {/* Content */}
          <Link to="Home" spy={true} smooth={true} duration={1000}>
            <img
              src={logo3}
              alt="Logo"
              className="h-[60px] cursor-pointer my-2"
            />
          </Link>
          <p className="text-sm">
            We Are An Expert in Software Development & Digital Marketing And Use
            The Best Technologies And Platforms To Deliver High-Quality
            Products.
          </p>
        </div>

        {/* Column 2 */}
        <div className="mb-6 text-left md:mb-0 md:w-1/4">
          {/* Links */}
          <h6 className="text-lg font-bold mb-4">Useful links</h6>
          {navArray.map((item, index) => (
            <Link to={item} spy={true} smooth={true} duration={500} key={index}>
              <p href="#!" className="text-gray-300 hover:text-white">
                {item}
              </p>
            </Link>
          ))}
        </div>

        {/* Column 3 */}
        <div className="mb-6 text-left md:mb-0 md:w-1/4">
          {/* Links */}
          <h6 className="text-lg font-bold mb-4">Contact</h6>
          <p>Ramesh Nagar, New Delhi - 110015, India</p>
          <p> info@adshad.in</p>
          <p>+91 6206926949</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
