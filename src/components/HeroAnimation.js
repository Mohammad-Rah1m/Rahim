"use client";
import React from "react";
// import Lottie from "lottie-react";
// import HeroAnimationData from "@/assets/lottie/hero-animation.json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const HeroAnimation = () => {
  const HeroAnimationData = require("@/assets/lottie/hero-animation.json");

  return (
    <div>
      <Lottie
        animationData={HeroAnimationData}
        loop={true}
        autoplay={true}
        // style={{ width: '300px', height: '200px' }}
        className="w-[80%] h-auto z-10"
      />
    </div>
  );
};

export default HeroAnimation;
