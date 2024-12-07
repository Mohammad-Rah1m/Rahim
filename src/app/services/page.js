import React from "react";
import SubPageHero from "@/components/SubPageHero";
import Button from "@/components/Button";
import Image from "next/image";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import ServicesCart from "@/components/ServicesCart";

const page = () => {
  return (
    <div>
      <SubPageHero
        title="Services"
        image_url="/images/services/services-banner2.jpg"
      />
      <div className="bg-customDarkGray py-20 px-5 xl:px-10 md:flex md:items-center md:gap-10 xl:gap-20">
        <div className="md:w-1/2">
          <Image
            src="/images/services/Services.png"
            alt="Mohammad Rahim"
            className="rounded-lg"
            layout="responsive"
            width={100}
            height={50}
          />
        </div>
        <div className="mt-10 md:w-1/2">
          <h6 className="font-medium text-gray-400 text-center md:text-left">
            WHAT I DO
          </h6>
          <h2 className="text-white text-3xl md:text-4xl text-center md:text-left font-semibold">
            Real
            <span className="text-accent"> Problem Solutions </span>
            Experience
          </h2>
          <p className="text-gray-400 text-center md:text-left">
            I offer a comprehensive range of services tailored to meet your
            digital needs. From custom website development to innovative web
            design, I transform your vision into a compelling online presence.
          </p>
          <div className="mt-10 flex justify-center md:justify-start">
            <Button text="Contact Me" href="/contact" />
          </div>
        </div>
      </div>
      <div className="pricing py-20 px-5 xl:px-10 bg-black">
        <h6 className="font-medium text-gray-400 text-center">PRICING</h6>
        <h2 className="text-white text-3xl md:text-4xl font-semibold text-center">
          Amazing
          <span className="text-accent"> Pricing </span>
          For your Projects
        </h2>
        <div className="mt-10 flex justify-center">
          <Pricing />
        </div>
      </div>
      <div className="services py-20 px-5 xl:px-10 bg-customDarkGray">
        <h6 className="font-medium text-gray-400 text-center">SERVICES</h6>
        <h2 className="text-white text-3xl md:text-4xl text-center font-semibold">
          My
          <span className="text-accent"> Special Service </span>
          For your Business Development
        </h2>
        <div className="flex flex-col md:flex-row gap-5 mt-10">
          <ServicesCart
            serial="01"
            title="WordPress Development"
            description="Dynamic and responsive website in Wordpress"
          />
          <ServicesCart
            serial="02"
            title="React"
            description="Build appealing SPA in React"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-6">
          <ServicesCart
            serial="03"
            title="NextJS"
            description="Build modern, scalable Next.js web applications."
          />
          <ServicesCart
            serial="04"
            title="UI/UX"
            description="Create dynamic, responsive, user-friendly designs."
          />
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-6">
          <ServicesCart
            serial="05"
            title="Web Applications"
            description="Custom Web Applications with MERN"
          />
          <ServicesCart
            serial="06"
            title="SEO"
            description="Website speed performance and SEO"
          />
        </div>
        <div className="flex justify-center mt-10">
          <Button text="Contact" href="/contact" />
        </div>
      </div>
    </div>
  );
};

export default page;
