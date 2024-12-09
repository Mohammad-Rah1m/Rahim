"use client"; // if using Next.js App Router

import React from "react";
import Slider from "react-slick"; // Import react-slick for the carousel
import "slick-carousel/slick/slick.css"; // slick-carousel CSS
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Mohammad Rahim transformed our website with modern design and functionality, boosting user engagement and delivering exceptional results.",
    author: "John Doe",
    position: "CEO, Company Inc.",
    image: "/images/about/client1.png",
  },
  {
    quote:
      "Efficient, professional, and creative – Mohammad Rahim developed a responsive website that exceeded our expectations and met all business goals.",
    author: "Jane Smith",
    position: "Manager, Business Ltd.",
    image: "/images/about/client2.png",
  },
  {
    quote:
      "Outstanding work by Mohammad Rahim! His expertise in web development brought our vision to life with precision and speed.",
    author: "Mary Johnson",
    position: "Developer, Tech Corp.",
    image: "/images/about/client3.png",
  },
];

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // Adjust this value for your desired screen size (768px for tablets and below)
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
          slidesToScroll: 1, // Scroll 1 slide at a time
        },
      },
    ],
  };

  return (
    <div className="testimonial-carousel w-full px-5 xl:px-10 2xl:px-52 py-20 bg-customDarkGray md:flex md:gap-5 lg:gap-10">
      <div className="md:w-1/3">
        <h6 className="font-medium text-gray-400 text-center md:text-left">
          CLIENT TESTIMONIALS
        </h6>
        <h2 className="text-white text-3xl md:text-4xl text-center md:text-left font-semibold">
          I’ve 100+ Clients
          <span className="text-accent"> Feedback </span>
        </h2>
        <p className="text-white">
        These testimonials are purely fictional and serve as placeholders to enhance the user interface design and visual appeal, ensuring a polished and professional look of my portfolio.
        </p>
      </div>
      <div className="mt-10 md:mt-0 md:w-2/3 cursor-grab">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-customGray text-white rounded-lg p-8 text-center block group"
            >
              <div className="flex justify-center mb-5">
                <div className="relative">
                  <Image
                    src={testimonial.image}
                    alt="Testimonial Images"
                    className="rounded-lg"
                    width={100}
                    height={50}
                  />
                  <div className="bg-customDarkGray w-[50px] h-[50px] flex items-center justify-center rounded-full absolute top-6 -left-8 group-hover:bg-accent">
                  <FaQuoteLeft className="group-hover:text-black"/>
                </div>
                </div>
              </div>
              <p className="text-gray-400">
                {testimonial.quote}
              </p>
              <p className="text-lg font-semibold mt-5">{testimonial.author}</p>
              <p className="text-accent">{testimonial.position}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
