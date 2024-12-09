import React from 'react'
import ServicesCart from "@/components/ServicesCart";
import Button from "@/components/Button";

const Services = () => {
  return (
    <div className="services py-20 px-5 xl:px-10 2xl:px-52 bg-customDarkGray">
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
        <div className="flex justify-center mt-10">
          <Button text="Learn More" href="/services" />
        </div>
      </div>
  )
}

export default Services
