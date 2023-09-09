import Image from "next/image";
import React from "react";

import Crown from "../../public/images/svg/crown.svg";

const TopOverlay = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center uppercase pl-[8rem] bg-topoverlay bg-no-repeat bg-cover">
      <h1 className="flex text-7xl text-teal-500">
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
      <h2 className="text-2xl text-teal-500 tracking-widest">
        Nashville ~ tennessee
      </h2>
    </div>
  );
};

export default TopOverlay;
