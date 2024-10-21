import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from "../assets/logo-clear.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        {" "}
        <Link to="/">
          <img src={Logo} alt="Logo Image" style={{ width: "80px" }} />
        </Link>
      </div>

      {/* menu */}

      <ul className="hidden md:flex">
        <li>
          <Link to="/ranking">Ranking</Link>
        </li>
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
        <li>
          <Link to="/ranking">Ranking</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/ranking">
            Ranking
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/calendar">
            Calendar
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/ranking">
            Ranking
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/about">
            About
          </Link>
        </li>
      </ul>

      {/* Social icons
      <div className="flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-gray-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
