"use client";
import React from "react";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const HeroAnimation = () => {
  const HeroAnimationData = require("@/assets/lottie/hero-animation.json");

  return (
    <div className="flex justify-center md:justify-end">
      <Lottie
        animationData={HeroAnimationData}
        loop={true}
        autoplay={true}
        // style={{ width: '300px', height: '200px' }}
        className="w-[100%] h-auto z-10"
      />
    </div>
  );
};

export default HeroAnimation;
