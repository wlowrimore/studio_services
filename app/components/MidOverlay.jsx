import React from "react";

const MidOverlay = () => {
  return (
    <div className="w-full mx-auto bg-gray-950 bg-opacity-80 py-12 pl-[20rem] pr-[15rem] rounded-lg">
      <p className="text-xl text-white ">
        <span className="text-green-700">Imperial Studios</span> comes fully
        equipt with quality gear and a quality staff. We are located in the
        heart of Nashville, TN with a multitude of 1st, 2nd, and 3rd call
        musicians standing by. Whether you require a digital interface, or you
        just want the vintage, organic overtones of a good ole fashion reel to
        reel recording...we&apos;ve got you covered.
      </p>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-4 gap-4"></div>
      </div>
    </div>
  );
};

export default MidOverlay;
