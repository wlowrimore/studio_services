import Image from "next/image";
import React from "react";

import Grammy from "../../../public/images/grammy.jpg";

const HomePage = () => {
  return (
    <div className="min-h-screen w-screen bg-customhome bg-fixed bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center">
      <div className="w-full mx-auto bg-gray-950 bg-opacity-80 py-12 pl-[20rem] pr-[15rem] rounded-lg">
        <h1 className="text-3xl text-white tracking-wider uppercase font-semibold">
          A Unique Recording Experience
        </h1>
        <br />
        <p className="text-white tracking-wider">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at
          tellus at urna condimentum mattis pellentesque. Purus gravida quis
          blandit turpis cursus. Feugiat in fermentum posuere urna. Penatibus et
          magnis dis parturient. Eget aliquet nibh praesent tristique magna sit
          amet. Bibendum enim facilisis gravida neque convallis. Posuere ac ut
          consequat semper viverra nam. Suspendisse potenti nullam ac tortor.
          Gravida in fermentum et sollicitudin. Fermentum et sollicitudin ac
          orci phasellus. Ut porttitor leo a diam sollicitudin. Amet dictum sit
          amet justo donec enim diam vulputate. Orci a scelerisque purus semper
          eget duis at tellus at. Volutpat est velit egestas dui id ornare. Et
          malesuada fames ac turpis egestas maecenas.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
