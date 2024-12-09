"use client";
import React , {useEffect } from "react";
import { FaCheck } from "react-icons/fa6";
// import Button from "@/components/Button";
import { useDispatch, useSelector } from "react-redux";
import { openPopup } from "@/lib/features/popup/popupSlice";
import Popup from "@/components/Popup";
import { FaCircleChevronRight } from "react-icons/fa6";
import { setPlan } from "@/lib/features/plan/planSlice";

const Pricing = () => {
  const isOpen = useSelector((state) => state.popup.isOpen);
  useEffect(() => {
    // Disable scrolling when popup is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  
    // Cleanup
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  
  const dispatch = useDispatch();
  const handleClick = (plan) => {
    dispatch(openPopup()); // Open the popup
    dispatch(setPlan(plan)); // Set the selected plan
  };

  return (
    <div className="flex gap-10 flex-col w-full md:flex-row md:gap-5 md:flex-wrap md:justify-center">
      <Popup />
      <div className="pricing-card p-3 bg-customGray rounded-lg lg:w-[300px]">
        <div className="bg-black rounded-lg p-5">
          <h6 className="text-white text-xl">Basic Plan</h6>
          <p className="text-gray-400">Wordpress</p>
          <div className="flex mt-5 items-baseline gap-1">
            <h3 className="text-accent text-3xl font-semibold">$40</h3>
            <p className="text-gray-400">/</p>
            <p className="text-gray-400">Per Page</p>
          </div>
        </div>
        <div className="p-5 flex flex-col gap-2">
          <div className="pricing-option flex gap-3">
            <FaCheck className="text-accent text-2xl" />
            <p className="text-white">Design</p>
          </div>
          <div className="pricing-option flex gap-3">
            <FaCheck className="text-accent text-2xl" />
            <p className="text-white">Development</p>
          </div>
          <div className="pricing-option flex gap-3">
            <FaCheck className="text-gray-400 text-2xl" />
            <p className="text-gray-400">Responsiveness</p>
          </div>
          <div className="pricing-option flex gap-3">
            <FaCheck className="text-gray-400 text-2xl" />
            <p className="text-gray-400">Customization</p>
          </div>
          <div className="mt-5">
            <div className="bg-accent hover:bg-accentDark rounded-md flex w-max items-center gap-3 py-2 px-5 transition-colors duration-300 ease-in-out  cursor-pointer" onClick={() => handleClick("Basic Plan")}>
              <p className="font-medium text-black">Choose Plan</p>
              <FaCircleChevronRight className="text-black" />
            </div>
          </div>
        </div>
      </div>

      <div className="pricing-card p-3 bg-customGray rounded-lg lg:w-[300px]">
        <div className="bg-black rounded-lg p-5">
          <h6 className="text-white text-xl">Standard Plan</h6>
          <p className="text-gray-400">Wordpress</p>
          <div className="flex mt-5 items-baseline gap-1">
            <h3 className="text-accent text-3xl font-semibold">$60</h3>
            <p className="text-gray-400">/</p>
            <p className="text-gray-400">Per Page</p>
          </div>
        </div>
        <div className="p-5 flex flex-col gap-2">
          <div className="pricing-option flex gap-3">
            <FaCheck className="text-accent text-2xl" />
            <p className="text-white">Design</p>
          </div>
          <div className="pricing-option flex gap-3">
            <FaCheck className="text-accent text-2xl" />
            <p className="text-white">Development</p>
          </div>
          <div className="pricing-option flex gap-3">
            <FaCheck className="text-accent text-2xl" />
            <p className="text-white">Responsiveness</p>
          </div>
          <div className="pricing-option flex gap-3">
            <FaCheck className="text-gray-400 text-2xl" />
            <p className="text-gray-400">Customization</p>
          </div>
          <div className="mt-5">
          <div className="bg-accent hover:bg-accentDark rounded-md flex w-max items-center gap-3 py-2 px-5 transition-colors duration-300 ease-in-out  cursor-pointer" onClick={() => handleClick("Standard Plan")}>
              <p className="font-medium text-black">Choose Plan</p>
              <FaCircleChevronRight className="text-black" />
            </div>
          </div>
        </div>
      </div>

      <div className="pricing-card p-3 bg-customGray rounded-lg lg:w-[300px]">
        <div className="bg-black rounded-lg p-5">
          <h6 className="text-white text-xl">Premium Plan</h6>
          <p className="text-gray-400">Custom Apps</p>
          <div className="flex mt-5 items-baseline gap-1">
            <h3 className="text-accent text-3xl font-semibold">$100</h3>
            <p className="text-gray-400">/</p>
            <p className="text-gray-400">Per Page</p>
          </div>
        </div>
        <div className="p-5 flex flex-col gap-2">
          <div className="pricing-option flex gap-3">
            <FaCheck className="text-accent text-2xl" />
            <p className="text-white">Design</p>
          </div>
          <div className="pricing-option flex gap-3">
            <FaCheck className="text-accent text-2xl" />
            <p className="text-white">Development</p>
          </div>
          <div className="pricing-option flex gap-3">
            <FaCheck className="text-accent text-2xl" />
            <p className="text-white">Responsiveness</p>
          </div>
          <div className="pricing-option flex gap-3">
            <FaCheck className="text-accent text-2xl" />
            <p className="text-white">Customization</p>
          </div>
          <div className="mt-5">
          <div className="bg-accent hover:bg-accentDark rounded-md flex w-max items-center gap-3 py-2 px-5 transition-colors duration-300 ease-in-out  cursor-pointer" onClick={() => handleClick("Premium Plan")}>
              <p className="font-medium text-black">Choose Plan</p>
              <FaCircleChevronRight className="text-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
