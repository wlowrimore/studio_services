"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import PacketCard from "./packet_card";
import Credit from "../../../public/images/creditCards.png";

const Packets = () => {
  const [packets, setPackets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/packets");
      const data = await res.json();
      setPackets(data);
    };
    fetchData();
  }, []);

  return (
    // <div className="w-full mx-auto bg-gray-950 bg-opacity-80 pt-16 pb-2 pl-[20rem] pr-[14rem]">
    <div className="w-full mx-auto bg-gray-900 px-2 pt-4 pb-2 md:pt-16 md:pl-[20rem] md:pr-[18rem]">
      <p className="text-md text-white">
        <span className="text-green-600 text-lg">Imperial Studios</span> comes
        fully equipt with quality gear and a quality staff. We are located in
        the heart of Nashville, TN with a multitude of 1st, 2nd, and 3rd call
        musicians standing by. Whether you require a digital interface, or you
        just want the vintage, organic overtones of a good ole fashion reel to
        reel recording...we&apos;ve got you covered.
      </p>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {packets.map((packet, index) => (
            <div key={`card-${index}`} className="flex">
              <div>
                <PacketCard
                  packet={packet}
                  id={packet.id}
                  title={packet.title}
                  desc1={packet.desc1}
                  desc2={packet.desc1}
                  desc3={packet.desc1}
                  desc4={packet.desc1}
                  price={packet.price}
                  studio={packet.studio}
                  image={packet.image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 py-4 px-2 text-center">
        <div className="flex flex-col">
          <h1 className="text-2xl text-emerald-600 uppercase">
            financing available
          </h1>
          <p className="text-md text-center text-white tracking-wider px-1 pb-4">
            As &apos;Music Biz&apos; people, we understand just how hard it can
            get when funding your own project, so we teamed up with Belz Cargo
            Financial to make it easier!
          </p>
        </div>
        <div className="flex flex-col items-center py-4">
          <h1 className="text-2xl text-emerald-600 uppercase">we accept</h1>
          <div>
            <Image
              src={Credit}
              alt="credit-cards"
              width={500}
              height={500}
              className="w-56 text-center opacity-80"
            />
          </div>
        </div>
        <div className="flex flex-col py-4">
          <h1 className="text-2xl text-emerald-600 uppercase">
            checks accepted
          </h1>
          <ul className="text-md text-white tracking-wider list-none">
            <li>
              All checks must be submitted 4 weeks prior to the start date of
              your session.
            </li>
            <br />
            <li>
              Check total must equal the amount of the full scheduled session.
              No partials will be accepted.
            </li>
            <br />
            <li>
              A 20&#37; service fee will be charged on all prematurely
              terminated sessions.
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-6 flex justify-center">
        <p className="text-sm text-white md:text-gray-400 tracking-wider md:tracking-widest">
          <span className="relative right-1 bottom-1 text-gray-400">
            &dagger;
          </span>
          For more information on payment options and conditions, please review
          the{" "}
          <Link href="#" className="text-gray-400 underline">
            priivacy policy
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-gray-400 underline">
            terms and conditions
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Packets;
