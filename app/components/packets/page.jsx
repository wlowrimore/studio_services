"use client";

import React, { useState, useEffect } from "react";
import PacketCard from "./packet_card";

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
    <div className="w-full mx-auto bg-gray-950 bg-opacity-80 py-16 pl-[20rem] pr-[14rem]">
      <p className="text-xl text-white pb-8 ">
        <span className="text-green-700">Imperial Studios</span> comes fully
        equipt with quality gear and a quality staff. We are located in the
        heart of Nashville, TN with a multitude of 1st, 2nd, and 3rd call
        musicians standing by. Whether you require a digital interface, or you
        just want the vintage, organic overtones of a good ole fashion reel to
        reel recording...we&apos;ve got you covered.
      </p>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-4 gap-10">
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
    </div>
  );
};

export default Packets;
