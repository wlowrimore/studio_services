import React from "react";
import Contact from "../contact/Contact";

const Services = () => {
  return (
    <>
      <div className="w-screen min-h-screen bg-contact bg-fixed bg-no-repeat bg-cover">
        <div className="w-full mt-0 mx-auto bg-amber-950 bg-opacity-80 border-t-8 border-gray-300 py-12 pl-[20rem] pr-[15rem]">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl text-white tracking-wider uppercase font-semibold">
              book your session
            </h1>
          </div>
        </div>
        <div className="flex pt-[8rem]">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Services;
