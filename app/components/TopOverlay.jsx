import Image from "next/image";
import React from "react";

import Crown from "../../public/images/svg/32562.svg";

const TopOverlay = () => {
  return (
    <div className="w-screen h-[15rem] flex items-center px-[3rem]">
      <Image
        src={Crown}
        alt="crown-logo"
        width={100}
        height={100}
        className="w-44"
      />
      <h1 className="relative right-[8rem] top-[0.5rem] text-7xl text-teal-700 uppercase">
        imperial studios
      </h1>
    </div>
  );
};

export default TopOverlay;
