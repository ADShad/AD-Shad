import React, { useState } from "react";
import { FaTimes, FaPhoneAlt } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.jpeg";
import logo2 from "../assets/logo2.png";
import "../styles/navbar.css";
import { navArray } from "../store/services-store";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] text-xl  flex justify-between items-center px-6 bg-gray-100 text-[#313131]">
      <Link to="Home" spy={true} smooth={true} duration={1000}>
        <img src={logo2} alt="Logo" className="h-[70px] cursor-pointer" />
      </Link>

      {/* main screen */}
      <div className="font-normal hidden md:flex shadow-[#040c16] ml-20 ">
        <ul className="hidden md:flex">
          {navArray.map((navItem, index) => (
            <li className="mx-6 font-bold" key={index}>
              <Link
                to={navItem}
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                {navItem}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <button className="bg-[#00c5f9] text-[#fdfbfb] border-[#e94452] rounded-full lg:py-2.5 lg:px-3.5 py-2 px-3 ">
        <div className="flex justify-center align-middle">
          <FaPhoneAlt className="mt-[5px]" />
          <a className="mx-2 " href="tel:+919582112962">
            +91 6206926949
          </a>
        </div>
      </button>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBarsStaggered /> : <FaTimes />}
      </div>

      {/* Mobile */}
      <div
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#00c5f9] flex flex-col justify-center items-center"
        }
      >
        <ul>
          {navArray.map((navItem, index) => (
            <li className="py-6 text-3xl" key={index}>
              <Link
                onClick={handleClick}
                to={navItem}
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                {navItem}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
