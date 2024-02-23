import React from "react";
import NotesApp from "../assets/anya.png";
import QuoteApp from "../assets/quotes.png";
import SpotApp from "../assets/spot2.png";
import Pos from "../assets/pos.png";
import DataProject from "../assets/dataproject.png";
import ReactRover from "../assets/reactrover.png";
import BBcharts from "../assets/bbcharts.png";
import ResumeLint from "../assets/resumeLint.png";

const Projects = () => {
  return (
    <div className="mt-20 md:mb-32 w-full md:h-screen text-gray-300 bg-[#1A1A1A]">
      <div name="projects" className="lg:h-28"></div>
      <div className="py-32 max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#FACC15]">
            Projects
          </p>
          <p className="py-6">// Check out some of my recent projects</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${SpotApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                SpotAnalytics (SFF)
              </span>
              <div className="pt-8 text-center">
                <a href="https://statsforfans.azurewebsites.net/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Link
                  </button>
                </a>
                <a href="https://github.com/rishabhbizzle/spotAnalytics">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Pos})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Franchise POS System
              </span>
              <div className="pt-8 text-center">
                <a href="https://dev.pos.depo24.in">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Link
                  </button>
                </a>
                <button
                  disabled
                  className="text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-gray-700 font-bold text-lg"
                >
                  Code
                </button>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ReactRover})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                ReactRover
              </span>
              <div className="pt-8 text-center">
                <a href="https://reactrover.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Link
                  </button>
                </a>
                <a href="https://github.com/rishabhbizzle/react-rover">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${NotesApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Cute Notes
              </span>
              <div className="pt-8 text-center">
                <a href="https://cute-notes.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Link
                  </button>
                </a>
                <a href="https://github.com/rishabhbizzle/anya-notes-app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ResumeLint})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                ResumeLint
              </span>
              <div className="pt-8 text-center">
                <a href="https://resumelint.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Link
                  </button>
                </a>
                <a href="https://github.com/rishabhbizzle/resumelint">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${BBcharts})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Billboard Music Charts
              </span>
              <div className="pt-8 text-center">
                <a href="https://billboard-charts.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Link
                  </button>
                </a>
                <a href="https://github.com/rishabhbizzle/BillboardCharts">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
