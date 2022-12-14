import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Typed from 'react-typed';
import icon from "../assets/icon.jpg"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import {SiLeetcode} from 'react-icons/si'

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='md:mb-[-10px] text-pink-600'>Hi, my name is</p>
        <div className='flex justify-between items-center'>
        <h1 className='text-5xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Rishabh Jain
        </h1>
        <img className='icon hidden md:flex' src={icon} alt="icon" />
        </div>
        <div className='flex flex-row  lg:mt-[-12px]'>
        <h2 className='text-2xl sm:text-5xl font-bold text-[#8892b0]'>
          I'm a  
        </h2>
        <Typed
          className='pl-2 md:pl-3 lg:pl-4 text-2xl sm:text-5xl font-bold text-[#8892b0] items-center'
            strings={['Full Stack Developer', 'Software Developer']}
            typeSpeed={199}
            backSpeed={200}
            loop
          />
        </div>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a full-stack developer and an aspiring software developer. Currently, I’m focused on improving my DSA skills &
          building responsive full-stack web applications.
        </p>
        <div>
        <Link to="about" smooth={true} offset={50} duration={500}>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            
            Learn More
          
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </Link>
        </div>
        <div className='lg:hidden flex mt-10'>
        <ul className='flex py-2 mx-auto'>
          <li className=" mx-2 w-[60px] px-4 h-[60px] flex justify-center items-center hover:scale-110 duration-500 bg-blue-600 text-gray-300">
            <a target="_blank"
            rel="noreferrer"
              href="https://www.linkedin.com/in/rishabh223/"
              className="flex justify-between items-center w-full text-gray-300"
            >
            <FaLinkedin size={30} />
            </a>
          </li>
          <li className="mx-2 w-[60px] px-4 h-[60px] flex justify-center items-center hover:scale-110 duration-500 bg-[#333333] text-gray-300">
            <a target="_blank"
            rel="noreferrer"
              href="https://github.com/rishabhbizzle"
              className="flex justify-between items-center w-full text-gray-300"
            >
            <FaGithub size={30} />
            </a>
          </li>
          <li className="mx-2 w-[60px] px-4 h-[60px] flex justify-center items-center hover:scale-110 duration-500 bg-yellow-600 text-gray-300">
            <a target="_blank"
            rel="noreferrer"
              href="https://leetcode.com/bizzxle/"
              className="flex justify-between items-center w-full text-gray-300"
            >
            <SiLeetcode size={30} />
            </a>
          </li>
          <li className="mx-2 w-[60px] px-4 h-[60px] flex justify-center items-center hover:scale-110 duration-500 bg-purple-600 text-gray-300">
            <a target="_blank"
            rel="noreferrer"
              href="/resume.pdf"
              className="flex justify-between items-center w-full text-gray-300"
            >
            <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home