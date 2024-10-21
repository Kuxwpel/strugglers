import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f]">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#75ff33]"> Upcoming Struggler</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          EVENTS
        </h1>
        <div>
          <Link to="/calendar">
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#185c25] hover:border-[#185c25]">
              Add Event
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
