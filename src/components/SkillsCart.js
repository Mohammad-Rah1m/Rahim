import React from 'react';
import Image from 'next/image';

const SkillsCart = ({ imagePath, skillName, skillNum }) => {
  return (
    <div className="skill-cart bg-customGray p-3 flex flex-col gap-3 items-center rounded-lg w-full border border-gray-500 hover:border-accent cursor-pointer transition-colors duration-300 ease-in-out group">
      <Image
        src={imagePath} // Path to image in the public folder
        alt="skill icon"
        width={70} 
        height={70}
      />
      <p className="text-white text-lg text-center">{skillName}</p>
      <div className="skillNum-container bg-black w-full text-center rounded-lg p-2 transition-colors duration-300 ease-in-out group-hover:bg-accent">
        <p className="text-gray-500 text-lg font-semibold group-hover:text-black">{skillNum}</p>
      </div>
    </div>
  );
};

export default SkillsCart;
