import React from "react";

const About = () => {
  return (
    // <div id="about" className="md:min-h-screen w-screen bg-customabout bg-fixed bg-no-repeat bg-cover bg-center flex flex-col border-t-4 border-white items-center">

    <div
      id="about"
      className="w-screen bg-customabout bg-fixed bg-no-repeat bg-cover bg-center border-t-4 border-white"
    >
      {/* <div className="w-full h-[20rem] mx-auto bg-cyan-950 bg-opacity-80 py-12 pl-[20rem] pr-[15rem]"> */}

      <div className="w-full bg-cyan-950 bg-opacity-80 py-4 px-2 border-b-4 border-white">
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl text-white tracking-wider uppercase font-semibold">
            Established in 1977
          </h1>
          <br />
          <p className="text-white text-md tracking-wider">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at
            tellus at urna condimentum mattis pellentesque. Purus gravida quis
            blandit turpis cursus. Feugiat in fermentum posuere urna. Penatibus
            et magnis dis parturient. Eget aliquet nibh praesent tristique magna
            sit amet. Bibendum enim facilisis gravida neque convallis. Posuere
            ac ut consequat semper viverra nam. Suspendisse potenti nullam ac
            tortor. Gravida in fermentum et sollicitudin. Fermentum et
            sollicitudin ac orci phasellus. Ut porttitor leo a diam
            sollicitudin. Amet dictum sit amet justo donec enim diam vulputate.
            Orci a scelerisque purus semper eget duis at tellus at. Volutpat est
            velit egestas dui id ornare. Et malesuada fames ac turpis egestas
            maecenas.
          </p>
        </div>
      </div>
      {/* <div className="w-full mt-auto mx-auto bg-emerald-950 bg-opacity-80 border-b-8 border-gray-300 py-12 pl-[20rem] pr-[15rem]">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl text-white tracking-wider uppercase font-semibold">
            services offered
          </h1>
        </div>
      </div> */}
    </div>
  );
};

export default About;
