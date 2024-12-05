"use client";
import React from "react";
import Lottie from "lottie-react";
import HeroAnimationData from "../../public/lottie/hero-animation.json";

const HeroAnimation = () => {
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
