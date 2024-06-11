import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import {SiLeetcode} from 'react-icons/si'

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-[80px] bg-black text-gray-300 flex justify-between items-center py-2 px-2">
      <div>
        <img src="" alt="" />
      </div>

      {/* Large screen menu */}
      <ul className="hidden md:flex ">
        <li className="px-4">
          <Link to="home" smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li className="px-4">
          <Link to="about" smooth={true} offset={50} duration={500}>
            About
          </Link>
        </li>
        <li className="px-4">
          <Link to="experience" smooth={true} duration={500}>
            Experince
          </Link>
        </li>
        <li className="px-4">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="px-4">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="px-4">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger icons */}
      <div onClick={handleNav} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile-menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 flex items-center mx-auto justify-center flex-col bg-black h-screen w-full"
        }
      >
        <li className="p-4 text-4xl">
          <Link onClick={handleNav} to="home" smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li className="p-4 text-4xl">
          <Link onClick={handleNav} to="about" smooth={true} offset={50} duration={500}>
            About
          </Link>
        </li>
        <li className="p-4 text-4xl">
          <Link onClick={handleNav} to="experience" smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li className="p-4 text-4xl">
          <Link onClick={handleNav} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="p-4 text-4xl">
          <Link onClick={handleNav} to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="p-4 text-4xl">
          <Link onClick={handleNav} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* socials */}
      <div className="hidden lg:flex fixed flex-col top-[20%] left-0">
        <ul>
          <li className="w-[160px] px-4 h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 text-gray-300">
            <a target="_blank"
            rel="noreferrer"
              href="https://www.linkedin.com/in/rishabh223/"
              className="flex justify-between items-center w-full text-gray-300 h-full"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] px-4 h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] text-gray-300">
            <a target="_blank"
            rel="noreferrer"
              href="https://github.com/rishabhbizzle"
              className="flex justify-between items-center w-full text-gray-300 h-full"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] px-4 h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-yellow-600 text-gray-300">
            <a
            target="_blank"
            rel="noreferrer"
              href="https://leetcode.com/bizzxle/"
              className="flex justify-between items-center w-full text-gray-300 h-full"
            >
              Leetcode <SiLeetcode size={30} />
            </a>
          </li>
          <li className="w-[160px] px-4 h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] text-gray-300">
            <a
              target="_blank"
              href="/Rishabh Resume.pdf"
              className="flex justify-between items-center w-full text-gray-300 h-full"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className="w-[160px] px-4 h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] text-gray-300">
            <a
              href="mailto:rishabhbizzle@gmail.com"
              className="flex justify-between items-center w-full text-gray-300 h-full"
            >
              Mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] px-4 h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#a159e4] text-gray-300">
            <a
              href="https://twitter.com/rishabhtwt"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300 h-full"
            >
              Twitter / X <FaTwitter size={30} />
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
