import React from "react";

const HomePage = () => {
  return (
    // <div className="md:min-h-screen w-screen bg-customhome bg-fixed bg-no-repeat bg-cover bg-center flex flex-col items-center overflow-y-auto">
    <div className="w-screen bg-customhome bg-fixed bg-no-repeat bg-cover bg-center">
      {/* <div className="flex flex-col justify-center w-full h-[30rem] border-t-4 border-white mx-auto bg-gray-950 bg-opacity-80 py-12 pl-[20rem] pr-[15rem]"> */}
      <div className="flex flex-col items-center md:items-start w-full c border-y-4 border-white mx-auto px-2 py-4 md:py-12 bg-gray-950 bg-opacity-60 overflow-y-auto">
        <h1 className="text-xl md:text-3xl text-white tracking-wider uppercase font-semibold">
          A Unique Recording Experience
        </h1>
        <br />
        <p className="text-white tracking-wider">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at
          tellus at urna condimentum mattis pellentesque. Purus gravida quis
          blandit turpis cursus.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
