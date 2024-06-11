import React from "react";
import { FaCode } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full  bg-black text-gray-300 mb-32 lg:mb-28"
    >
      <div name="experience" className="h-28 lg:h-12"></div>
      {/* Container */}
      <div className="lg:my-12 max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 inline border-[#16B308]">
            Work Experience
          </p>
          <p className="py-4 ">// Companies I've worked for:</p>
        </div>
        <div className="gap-4 my-12 grid sm:grid-cols-6">
          <div className="col-span-1 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-28 rounded-xl" src="/depo24.jpeg" />
            <p className="text-3xl my-4 mx-auto font-bold">Depo24</p>
          </div>
          <div className="col-span-5">
            <div className="md:flex justify-between">
              <div className="flex p-1 gap-1">
                <MdWork className="text-4xl text-[#16B308]" />
                <p className="text-2xl font-medium">Full Stack Developer</p>
              </div>
              <div className="flex gap-2 px-5 py-1 items-center font-medium">
                Feb 2023 - Present
              </div>
            </div>
            <div className="flex gap-2 px-5 py-1 items-center">
              <FaCode className="text-[#16B308] w-[4%]" size={60} />
              <p className="text-md w-[90%]">
                Developed and maintained a comprehensive e-commerce admin portal
                using React.js, Node.js, MongoDB, and PostgreSQL, empowering
                administrators to manage products, orders, and inventory
                efficiently
              </p>
            </div>
            <div className="flex gap-2 px-5 items-center py-1">
              <FaCode className="text-[#16B308] w-[4%]" size={60} />
              <p className="text-md w-[90%]">
                Implemented role-based access control (RBAC) and integrated
                analytics and reporting features into the admin portal,
                providing administrators with real-time insights into sales,
                inventory, and customer behavior, facilitating data-driven
                decision-making, resulting in a 40% increase in efficiency
              </p>
            </div>
            <div className="flex gap-2 px-5 items-center py-1">
              <FaCode className="text-[#16B308] w-[4%]" size={60} />
              <p className="text-md w-[90%]">
                Delivered a brand new Franchise POS (Point of Sale) system,
                facilitating streamlined order processing at franchise stores
                which significantly increased the revenue.
              </p>
            </div>
          </div>
        </div>
        <div className="gap-4 my-11 grid sm:grid-cols-6">
          <div className="col-span-1 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-28 rounded-xl"
              src="/projectparvah.jpeg"
            />
            <p className="text-3xl my-4 mx-auto font-bold">Project Parvaah</p>
          </div>
          <div className="col-span-5">
            <div className="md:flex justify-between">
              <div className="flex p-1 gap-1">
                <MdWork className="text-4xl text-[#16B308]" />
                <p className="text-2xl font-medium">Full Stack Developer</p>
              </div>
              <div className="flex gap-2 px-5 py-1 items-center font-medium">
                Sept 2022 - Nov 2022
              </div>
            </div>
            <div className="flex gap-2 px-5 pt-1 items-center">
              <FaCode className="text-[#16B308] w-[4%]" size={60} />
              <p className="text-md w-[90%]">
                Worked on an Ed-Tech platform to help and support disabled
                people.
              </p>
            </div>
            <div className="flex gap-2 px-5 items-center">
              <FaCode className="text-[#16B308] w-[4%]" size={60} />
              <p className="text-md w-[90%]">
                Collaborated with team members to ensure effective UI/UX design
                and development Worked with various technologies such as
                HTML/CSS, ReactJS and Django
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
