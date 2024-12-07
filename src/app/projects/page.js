import SubPageHero from "@/components/SubPageHero";
import React from "react";
import Button from "@/components/Button";
import Image from "next/image";
import Pricing from "@/components/Pricing";

const page = () => {
  return (
    <div>
      <SubPageHero
        title="Projects"
        image_url="/images/projects/projects-banner.jpg"
      />
      <div className="bg-customDarkGray py-20 px-5 xl:px-10 md:flex md:items-center md:gap-10 xl:gap-20">
        <div className="md:w-1/2">
          <Image
            src="/images/projects/Projects.png"
            alt="Mohammad Rahim"
            className="rounded-lg"
            layout="responsive"
            width={100}
            height={50}
          />
        </div>
        <div className="mt-10 md:w-1/2">
          <h6 className="font-medium text-gray-400 text-center md:text-left">
            RECENT PROJECTS
          </h6>
          <h2 className="text-white text-3xl md:text-4xl text-center md:text-left font-semibold">
            Real World
            <span className="text-accent"> Projects </span>
            Completed
          </h2>
          <p className="text-gray-400 text-center md:text-left">
            My recent projects showcase my expertise in both WordPress, React &
            NextJS reflecting my ability to deliver robust and dynamic web
            solutions.
          </p>
          <div className="mt-10 flex justify-center md:justify-start">
            <Button text="Contact Me" href="/contact" />
          </div>
        </div>
      </div>

      <div className="projects py-20 px-5 xl:px-10 bg-black flex flex-col gap-10">
        <div className="project-item bg-customGray p-5 rounded-lg flex flex-col-reverse gap-10 md:flex-row md:items-center md:gap-20 lg:p-8 cursor-pointer border border-customGray hover:border-accent transition-colors duration-300 ease-in-out nth-child-even:md:flex-row-reverse">
          <div className="project-item-text md:w-1/2">
            <h6 className="font-medium text-gray-400 text-center md:text-left">
              CARERIDE NATIONWIDE
            </h6>
            <h2 className="text-white text-3xl md:text-4xl text-center md:text-left font-semibold">
              Non-Emergency
              <span className="text-accent"> Medical Transportation </span>
              Services
            </h2>
            <p className="text-gray-400 text-center mt-5 md:text-left">
              CareRide Nationwide provides reliable non-emergency medical
              transportation, offering ambulatory, wheelchair, and stretcher
              services. Our professional team ensures safe, timely, and
              comfortable rides for medical appointments, therapy sessions, and
              other non-urgent travel needs, prioritizing customer care and
              accessibility.
            </p>
            <div className="flex justify-center mt-5 md:justify-start">
              <Button
                text="Visit Site"
                href="https://careridenationwide.com/"
                tab={true}
              />
            </div>
          </div>
          <div className="project-item-img md:w-1/2">
            <Image
              src="/images/projects/careride.jpg"
              alt="Careride Nationwide"
              layout="responsive"
              className="rounded-lg"
              width={100}
              height={50}
            />
          </div>
        </div>

        <div className="project-item bg-customGray p-5 rounded-lg flex flex-col-reverse gap-10 md:flex-row md:items-center md:gap-20 lg:p-8 cursor-pointer border border-customGray hover:border-accent transition-colors duration-300 ease-in-out nth-child-even:md:flex-row-reverse">
          <div className="project-item-text md:w-1/2">
            <h6 className="font-medium text-gray-400 text-center md:text-left">
              FASHIONEST
            </h6>
            <h2 className="text-white text-3xl md:text-4xl text-center md:text-left font-semibold">
              Shops The Latest
              <span className="text-accent"> Fashion </span>
              Products - Under Construction
            </h2>
            <p className="text-gray-400 text-center mt-5 md:text-left">
            Fashionest is your ultimate online fashion store, offering the latest trends for every style. From casual wear to formal outfits, we provide a wide range of clothing and accessories designed to suit all preferences. Enjoy a seamless shopping experience with fast delivery, secure payments, and exceptional customer service.
            </p>
            <div className="flex justify-center mt-5 md:justify-start">
              <Button
                text="Visit Site"
                href="https://fashionest.vercel.app/"
                tab={true}
              />
            </div>
          </div>
          <div className="project-item-img md:w-1/2">
            <Image
              src="/images/projects/fashionest.jpg"
              alt="Careride Nationwide"
              layout="responsive"
              className="rounded-lg"
              width={100}
              height={50}
            />
          </div>
        </div>

        <div className="project-item bg-customGray p-5 rounded-lg flex flex-col-reverse gap-10 md:flex-row md:items-center md:gap-20 lg:p-8 cursor-pointer border border-customGray hover:border-accent transition-colors duration-300 ease-in-out nth-child-even:md:flex-row-reverse">
          <div className="project-item-text md:w-1/2">
            <h6 className="font-medium text-gray-400 text-center md:text-left">
              THE BACKER HIVE
            </h6>
            <h2 className="text-white text-3xl md:text-4xl text-center md:text-left font-semibold">
              Connecting Passionate
              <span className="text-accent"> Backers </span>
            </h2>
            <p className="text-gray-400 text-center mt-5 md:text-left">
              Backer Hive is a dynamic community where creativity thrives,
              bringing together enthusiastic backers and creators to turn
              innovative crowdfunding ideas into reality.
            </p>
            <div className="flex justify-center mt-5 md:justify-start">
              <Button
                text="Visit Site"
                href="https://thebackerhive.com/"
                tab={true}
              />
            </div>
          </div>
          <div className="project-item-img md:w-1/2">
            <Image
              src="/images/projects/thebackerhive.jpg"
              alt="Careride Nationwide"
              layout="responsive"
              className="rounded-lg"
              width={100}
              height={50}
            />
          </div>
        </div>

        <div className="project-item bg-customGray p-5 rounded-lg flex flex-col-reverse gap-10 md:flex-row md:items-center md:gap-20 lg:p-8 cursor-pointer border border-customGray hover:border-accent transition-colors duration-300 ease-in-out nth-child-even:md:flex-row-reverse">
          <div className="project-item-text md:w-1/2">
            <h6 className="font-medium text-gray-400 text-center md:text-left">
              INSTA TIDY
            </h6>
            <h2 className="text-white text-3xl md:text-4xl text-center md:text-left font-semibold">
              Sparkle
              <span className="text-accent"> Clean </span>
              Everytime!
            </h2>
            <p className="text-gray-400 text-center mt-5 md:text-left">
              Instatidy offers professional cleaning services for homes and
              businesses, ensuring spotless spaces with expert attention to
              detail. Our reliable team delivers high-quality, eco-friendly
              cleaning solutions, leaving your environment fresh, clean, and
              inviting.
            </p>
            <div className="flex justify-center mt-5 md:justify-start">
              <Button
                text="Visit Site"
                href="https://instatidy.com/"
                tab={true}
              />
            </div>
          </div>
          <div className="project-item-img md:w-1/2">
            <Image
              src="/images/projects/instatidy.jpg"
              alt="Careride Nationwide"
              layout="responsive"
              className="rounded-lg"
              width={100}
              height={50}
            />
          </div>
        </div>

        <div className="project-item bg-customGray p-5 rounded-lg flex flex-col-reverse gap-10 md:flex-row md:items-center md:gap-20 lg:p-8 cursor-pointer border border-customGray hover:border-accent transition-colors duration-300 ease-in-out nth-child-even:md:flex-row-reverse">
          <div className="project-item-text md:w-1/2">
            <h6 className="font-medium text-gray-400 text-center md:text-left">
              BINARY PACH
            </h6>
            <h2 className="text-white text-3xl md:text-4xl text-center md:text-left font-semibold">
              Effortless, Precision, Accuracy
              <span className="text-accent"> Insulin </span>
              Delivery
            </h2>
            <p className="text-gray-400 text-center mt-5 md:text-left">
              Binary Biomedical strive to provide innovative biomedical
              solutions to improve the quality of life for people with diabetes
              around the world. their focus is on creating medical devices that
              incorporate the latest advanced technology, simpler to use, smart
              and affordable for everyone. By prioritizing innovation and
              accessibility, they aim to make managing diabetes easier and more
              affordable for all.
            </p>
            <div className="flex justify-center mt-5 md:justify-start">
              <Button
                text="Visit Site"
                href="https://binarybiomedical.com/"
                tab={true}
              />
            </div>
          </div>
          <div className="project-item-img md:w-1/2">
            <Image
              src="/images/projects/binary-patch.jpg"
              alt="Careride Nationwide"
              layout="responsive"
              className="rounded-lg"
              width={100}
              height={50}
            />
          </div>
        </div>

        <div className="project-item bg-customGray p-5 rounded-lg flex flex-col-reverse gap-10 md:flex-row md:items-center md:gap-20 lg:p-8 cursor-pointer border border-customGray hover:border-accent transition-colors duration-300 ease-in-out nth-child-even:md:flex-row-reverse">
          <div className="project-item-text md:w-1/2">
            <h6 className="font-medium text-gray-400 text-center md:text-left">
              CROWD FUNDER HUB
            </h6>
            <h2 className="text-white text-3xl md:text-4xl text-center md:text-left font-semibold">
              Innovative <span className="text-accent"> Campaigns </span>,
              Impactful Results
            </h2>
            <p className="text-gray-400 text-center mt-5 md:text-left">
              Empowering campaigns with cutting-edge crowdfunding design,
              tailored marketing strategies, and community-focused solutions. We
              help bring ideas to life, engaging supporters and driving success
              for meaningful projects, ensuring lasting impact and growth for
              every campaign we support.
            </p>
            <div className="flex justify-center mt-5 md:justify-start">
              <Button
                text="Visit Site"
                href="https://crowdfunderhub.com/"
                tab={true}
              />
            </div>
          </div>
          <div className="project-item-img md:w-1/2">
            <Image
              src="/images/projects/crowdfunderhub.jpg"
              alt="Careride Nationwide"
              layout="responsive"
              className="rounded-lg"
              width={100}
              height={50}
            />
          </div>
        </div>
      </div>

      <div className="pricing py-20 px-5 xl:px-10 bg-customDarkGray">
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
    </div>
  );
};

export default page;
