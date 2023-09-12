import Image from "next/image";
import React from "react";

import Crown from "../../../public/images/svg/crown.svg";

const HomeOverlay = () => {
  return (
    // <div className="min-w-screen min-h-screen flex flex-col items-center justify-center uppercase bg-topoverlay bg-no-repeat bg-cover">
    <div className="min-w-screen min-h-screen flex flex-col items-center justify-center uppercase bg-topoverlay bg-no-repeat bg-cover">
      <h1 className="flex text-2xl px-2 md:text-7xl text-teal-500">
        imperial
        <span className="relative px-2">
          <Image
            src={Crown}
            alt="crown-logo"
            width={100}
            height={100}
            className="w-10 lg:w-32 lg:relative lg:bottom-4"
          />
        </span>
        studios
      </h1>
      <h2 className="text-sm md:text-2xl text-teal-500 tracking-widest">
        Nashville ~ tennessee
      </h2>
    </div>
  );
};

export default HomeOverlay;
