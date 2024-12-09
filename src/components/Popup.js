"use client";
import { useDispatch, useSelector } from "react-redux";
import { closePopup } from "@/lib/features/popup/popupSlice";
import emailjs from "emailjs-com";
import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";

export default function Popup() {
  const selectedPlan = useSelector((state) => state.plan.selectedPlan);

  const [planData, setPlanData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const handleChange = (e) => {
    setPlanData({ ...planData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", planData);
    // Add your form submission logic here
    emailjs
      .sendForm(
        "service_ls156ui",
        "template_vgg91bb",
        e.target, // The form element
        "3ZT1jTIKK0wp5YR9g"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage("Thank you! We’ll contact you shortly.");
          setPlanData({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          setSuccessMessage("Error sending email. Please try again.");
        }
      );
  };

  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.popup.isOpen);
  const handleClose = () => {
    dispatch(closePopup()); // Dispatch the action to close the popup
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 px-5 ">
      <div className="bg-white rounded-lg h-auto w-full md:w-[500px] overflow-hidden shadow-[0px_3px_100px_0px_rgba(201,243,29,0.3)]">
        <div className="h-[80vh] p-6 overflow-y-scroll relative custom-scrollbar">
          <div className="absolute right-1 top-1 bg-accent-500 rounded-full cursor-pointer" onClick={handleClose}>
            <IoIosClose className="text-black w-8 h-8" />
          </div>
          <div className="border-b mb-3">
            <h3 className="text-center font-semibold text-2xl text-black">{selectedPlan}</h3>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-black"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={planData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={planData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
              />
            </div>

            {/* Phone Input */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-black"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={planData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-accent"
              />
            </div>

            {/* Service Dropdown */}
            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-black"
              >
                Service
              </label>
              <select
                id="service"
                name="service"
                value={planData.service}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent "
              >
                <option value="" disabled className="text-black">
                  Select a service
                </option>
                <option value="wordpress">WordPress</option>
                <option value="react">React</option>
                <option value="nextjs">Next.js</option>
                <option value="nextjs">Others</option>
              </select>
            </div>

            {/* Message Text Area */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-black"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={planData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows="5"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-accent text-black font-medium py-2 px-4 rounded-md hover:bg-accentDark first-line:focus:outline-none focus:ring focus:ring-accent-dark transition"
            >
              Submit
            </button>
            {successMessage && (
              <p className="mt-4 text-green-600 text-center text-sm">
                {successMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
