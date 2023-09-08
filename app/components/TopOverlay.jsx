import Image from "next/image";
import React from "react";

import Crown from "../../public/images/svg/crown.svg";

const TopOverlay = () => {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center px-[3rem] bg-topoverlay bg-no-repeat bg-cover">
      <h1 className="fixed flex text-7xl text-teal-500 uppercase">
        imperial
        <span className="relative bottom-10 px-2">
          <Image
            src={Crown}
            alt="crown-logo"
            width={100}
            height={100}
            className="w-44"
          />
        </span>
        studios
      </h1>
    </div>
  );
};

export default TopOverlay;
