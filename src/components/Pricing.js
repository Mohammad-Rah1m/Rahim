import React from "react";
import { FaCheck } from "react-icons/fa6";
import Button from "@/components/Button";

const Pricing = () => {
  return (
    <div className="flex gap-10 flex-col w-full md:flex-row md:gap-5 md:flex-wrap md:justify-center">
      <div className="pricing-card p-3 bg-customGray rounded-lg ">
        <div className="bg-black rounded-lg p-5">
          <h6 className="text-white text-xl">Basic Plan</h6>
          <p className="text-gray-400">Wordpress</p>
          <div className="flex mt-5 items-baseline gap-1">
            <h3 className="text-accent text-3xl font-semibold">$100</h3>
            <p className="text-gray-400">/</p>
            <p className="text-gray-400">Per Page</p>
          </div>
        </div>
        <div className="p-5 flex flex-col gap-2">
          <div className="pricing-option flex gap-3">
            <FaCheck className="text-accent text-2xl" />
            <p className="text-white">Web Design</p>
          </div>
          <div className="pricing-option flex gap-3">
            <FaCheck className="text-accent text-2xl" />
            <p className="text-white">Web Development</p>
          </div>
          <div className="pricing-option flex gap-3">
            <FaCheck className="text-gray-400 text-2xl" />
            <p className="text-gray-400">Web Responsiveness</p>
          </div>
          <div className="pricing-option flex gap-3">
            <FaCheck className="text-gray-400 text-2xl" />
            <p className="text-gray-400">Web Customization</p>
          </div>
          <div className="mt-5">
            <Button text="Choose Plan" href="/contact" />
          </div>
        </div>
      </div>

      <div className="pricing-card p-3 bg-customGray rounded-lg">
        <div className="bg-black rounded-lg p-5">
          <h6 className="text-white text-xl">Standard Plan</h6>
          <p className="text-gray-400">Wordpress</p>
          <div className="flex mt-5 items-baseline gap-1">
            <h3 className="text-accent text-3xl font-semibold">$200</h3>
            <p className="text-gray-400">/</p>
            <p className="text-gray-400">Per Page</p>
          </div>
        </div>
        <div className="p-5 flex flex-col gap-2">
          <div className="pricing-option flex gap-3">
            <FaCheck className="text-accent text-2xl" />
            <p className="text-white">Web Design</p>
          </div>
          <div className="pricing-option flex gap-3">
            <FaCheck className="text-accent text-2xl" />
            <p className="text-white">Web Development</p>
          </div>
          <div className="pricing-option flex gap-3">
            <FaCheck className="text-accent text-2xl" />
            <p className="text-white">Web Responsiveness</p>
          </div>
          <div className="pricing-option flex gap-3">
            <FaCheck className="text-gray-400 text-2xl" />
            <p className="text-gray-400">Web Customization</p>
          </div>
          <div className="mt-5">
            <Button text="Choose Plan" href="/contact" />
          </div>
        </div>
      </div>

      <div className="pricing-card p-3 bg-customGray rounded-lg">
        <div className="bg-black rounded-lg p-5">
          <h6 className="text-white text-xl">Premium Plan</h6>
          <p className="text-gray-400">Wordpress/React/NextJS</p>
          <div className="flex mt-5 items-baseline gap-1">
            <h3 className="text-accent text-3xl font-semibold">$300</h3>
            <p className="text-gray-400">/</p>
            <p className="text-gray-400">Per Page</p>
          </div>
        </div>
        <div className="p-5 flex flex-col gap-2">
          <div className="pricing-option flex gap-3">
            <FaCheck className="text-accent text-2xl" />
            <p className="text-white">Web Design</p>
          </div>
          <div className="pricing-option flex gap-3">
            <FaCheck className="text-accent text-2xl" />
            <p className="text-white">Web Development</p>
          </div>
          <div className="pricing-option flex gap-3">
            <FaCheck className="text-accent text-2xl" />
            <p className="text-white">Web Responsiveness</p>
          </div>
          <div className="pricing-option flex gap-3">
            <FaCheck className="text-accent text-2xl" />
            <p className="text-white">Web Customization</p>
          </div>
          <div className="mt-5">
            <Button text="Choose Plan" href="/contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
