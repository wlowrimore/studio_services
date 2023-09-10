import React from "react";
import Image from "next/image";

import OnSite from "../../public/images/svg/onsite.svg";
import Remote from "../../public/images/svg/remote.svg";
import Radio from "../../public/images/svg/radio.svg";
import Choirs from "../../public/images/svg/choirs.svg";
import Jingles from "../../public/images/svg/jingles.svg";
import Scores from "../../public/images/svg/movie_scores.svg";
import Symphony from "../../public/images/svg/orchestral.svg";
import Book from "../../public/images/svg/book.svg";
import Effects from "../../public/images/svg/sound_effects.svg";

const ServicesDetails = () => {
  return (
    <div
      id="services"
      className="w-screen min-h-screen text-2xl bg-vinylrecord bg-no-repeat bg-cover bg-opacity-20"
    >
      <div className="w-3/4 mx-auto pt-[10rem] pb-[5rem] flex justify-center items-center">
        <ul className="grid grid-cols-3 w-full gap-x-44 gap-y-24 py-0 pl-[4rem] list-none uppercase">
          <li className="flex items-center gap-x-4">
            <Image
              src={OnSite}
              alt="in-house-sessions"
              width={500}
              height={500}
              className="w-32"
            />
            in house sessions
          </li>
          <li className="flex items-center gap-x-4">
            <Image
              src={Remote}
              alt="remote-sessions"
              width={500}
              height={500}
              className="w-24"
            />
            remote (live) sessions
          </li>
          <li className="flex items-center gap-x-4">
            <Image
              src={Radio}
              alt="radio-ads"
              width={500}
              height={500}
              className="w-[2.8em]"
            />
            radio ads
          </li>
          <li className="flex items-center gap-x-4">
            <Image
              src={Choirs}
              alt="large-choirs"
              width={500}
              height={500}
              className="w-28"
            />
            large choirs
          </li>
          <li className="flex items-center gap-x-4">
            <Image
              src={Jingles}
              alt="jingles"
              width={500}
              height={500}
              className="w-28"
            />
            jingles
          </li>
          <li className="flex items-center gap-x-4">
            <Image
              src={Scores}
              alt="movie-scores"
              width={500}
              height={500}
              className="w-[5rem]"
            />
            movie scores
          </li>
          <li className="flex items-center gap-x-4">
            <Image
              src={Symphony}
              alt="symphonic-and-orchestral"
              width={500}
              height={500}
              className="w-36"
            />
            symphonic & orchestral
          </li>
          <li className="flex items-center gap-x-4">
            <Image
              src={Book}
              alt="audio-book"
              width={500}
              height={500}
              className="w-36"
            />
            audio books
          </li>
          <li className="flex items-center gap-x-4">
            <Image
              src={Effects}
              alt="sound-effects"
              width={500}
              height={500}
              className="w-36"
            />
            sound effects
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesDetails;
