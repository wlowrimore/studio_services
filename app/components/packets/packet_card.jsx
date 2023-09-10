import Image from "next/image";

const PacketCard = ({ packet }) => {
  return (
    <>
      <div className="my-8 w-auto h-[43rem] bg-teal-100 text-gray-950 rounded-md">
        <div className="flex flex-col justify-center items-center p-3">
          <div className="py-2 w-full text-center text-3xl uppercase font-semibold tracking-wide border-b border-gray-800">
            <h2>{packet.title}</h2>
          </div>
          <ul className="px-6 w-full my-6 py-3 text-lg list-disc flex flex-col item-start leading-relaxed">
            <li>{packet.desc1}</li>
            <li>{packet.desc2}</li>
            <li>{packet.desc3}</li>
            <li>{packet.desc4}</li>
          </ul>
          <div className="text-3xl w-full text-center pt-2 mb-8 bg-orange-200">
            <h4>
              <span className="text-[0.6em] relative bottom-2">$ </span>
              {packet.price}
            </h4>
          </div>
          <div className="flex flex-col justify-center items-center mb-4">
            <h3 className="text-2xl font-bold uppercase">{packet.studio}</h3>
          </div>
          <div className="w-full my-4">
            <Image
              src={packet.image}
              alt={packet.title}
              width={500}
              height={500}
              className="opacity-90 border border-gray-950 rounded-sm shadow-md shadow-black hover: cursor-pointer hover:shadow-none hover:scale-[300%] transition duration-500"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PacketCard;
