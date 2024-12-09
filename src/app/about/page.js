import React from "react";
import SubPageHero from "@/components/SubPageHero";
import Button from "@/components/Button";
import Image from "next/image";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";

const page = () => {
  return (
    <div>
      <SubPageHero title="About" image_url="/images/about/about-banner5.jpg" />
      <div className="bg-customDarkGray py-20 px-5 xl:px-10 2xl:px-52 md:flex md:items-center md:gap-10 xl:gap-20">
        <div className="md:w-1/2">
          <Image
            src="/images/about/About.png"
            alt="Mohammad Rahim"
            className="rounded-lg"
            layout="responsive"
            width={100}
            height={50}
          />
        </div>
        <div className="mt-10 md:w-1/2">
          <h6 className="font-medium text-gray-400 text-center md:text-left">
            WHO AM I
          </h6>
          <h2 className="text-white text-3xl md:text-4xl text-center md:text-left font-semibold">
            Experienced
            <span className="text-accent"> Web Designer & Developer </span>
          </h2>
          <p className="text-gray-400 text-center md:text-left">
            As a passionate and innovative web designer and developer, I bring
            three years of professional experience in creating dynamic,
            user-centric websites. My expertise lies in custom web development &
            WordPress Solutions.
          </p>
          <div className="mt-10 flex justify-center md:justify-start">
            <Button text="Contact Me" href="/contact" />
          </div>
        </div>
      </div>
      <Skills/>
      <Services/>
      <Resume/>
      <Testimonial/>
    </div>
  );
};

export default page;
