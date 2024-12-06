import React from "react";
import Image from "next/image";

const ServicesCart = ({ serial, title, description }) => {
  return (
    <div className="flex bg-customGray w-full gap-5 justify-between p-5 rounded-lg items-center border border-gray-500 hover:border-accent cursor-pointer transition-colors duration-300 ease-in-out">
      <div className="flex gap-5 w-[90%]">
        <div>
          <p className="text-gray-400 text-2xl">{serial}</p>
        </div>
        <div>
          <h3 className="text-white text-2xl">{title}</h3>
          <p className="text-gray-400 mt-3">{description}</p>
        </div>
      </div>
      <div className="w-[10%]">
        <Image
          id="arrow-up-right"
          src="/images/figma.png" // Path to image in the public folder
          alt="services-arrow"
          className="cursor-pointer rounded-lg"
          width={40} // Specify a width to let Next.js calculate the height
          height={40}
        />
      </div>
    </div>
  );
};

export default ServicesCart;
