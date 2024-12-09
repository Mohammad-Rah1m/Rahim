import Image from "next/image";
import Link from "next/link";
import React from "react";

const SubPageHero = ({ title, image_url }) => {
  return (
    <div className="bg-black pt-36 pb-20 px-5 xl:px-10 2xl:px-52 lg:pt-40 xl:pt-44">
      <h1 className="text-white text-4xl md:text-5xl text-center font-semibold">
        {title}
      </h1>
      <div className="flex items-center gap-3 justify-center mt-5">
        <Link href={"/"}>
          <p className="text-white hover:text-accent">Rahim Portfolio</p>
        </Link>
        <p className="text-white text-2xl font-bold -mt-3">.</p>
        <p className="text-accent">{title}</p>
      </div>
      <Image
        id="logo"
        src={image_url}
        alt="Logo"
        className="mt-10 rounded-lg"
        layout="responsive"
        width={100}
        height={50}
      />
    </div>
  );
};

export default SubPageHero;
